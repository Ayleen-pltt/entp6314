-- VendeAI: initial database schema for Supabase (Postgres).
--
-- Tables: sellers, products, customers, sales, sale_items, payments,
--         payment_schedule, nudges, consents.
--
-- Deletion and retention rules are enforced by the database itself, so the
-- app cannot break them by mistake:
--   1. Seller deleted      -> everything they own is deleted (CASCADE).
--                             Consent records are kept, without the seller link.
--   2. Product deleted     -> archived instead if it has sales; hard-deleted if not.
--                             Sale lines keep a snapshot of the product.
--   3. Customer deleted    -> blocked while they owe money (unless written off);
--                             otherwise their sales stay, with customer_id = NULL.
--   4. Sale deleted        -> its lines and payments are deleted, and the stock
--                             goes back to the products.
--   5. Payment deleted     -> the sale's balance and status are recalculated.
--
-- Money is numeric(12,2). Every table is protected by row-level security:
-- a seller can only see and change their own rows.


-- ---------------------------------------------------------------------------
-- Types
-- ---------------------------------------------------------------------------

-- 'credit' = nothing paid yet. 'written_off' = debt given up, kept for the books.
create type payment_status as enum ('paid', 'partial', 'credit', 'written_off');


-- ---------------------------------------------------------------------------
-- Sellers (one row per user account)
-- ---------------------------------------------------------------------------

create table sellers (
  id            uuid primary key references auth.users (id) on delete cascade,
  name          text not null,                       -- name or nickname
  contact       text not null,                       -- one phone OR one email
  contact_type  text not null check (contact_type in ('phone', 'email')),
  country       text not null check (country in ('MX', 'CO', 'PE', 'AR', 'CL', 'BR')),
  language      text not null default 'es' check (language in ('es', 'pt', 'en')),
  -- "Tu negocio" answers: sector, sectorOther, credit, wholesale, needs[]
  business      jsonb not null default '{}'::jsonb,
  sell_channels text[] not null default '{}',
  pay_methods   text[] not null default '{}',
  pay_other     text,
  created_at    timestamptz not null default now()
);


-- ---------------------------------------------------------------------------
-- Products
-- ---------------------------------------------------------------------------

create table products (
  id              uuid primary key default gen_random_uuid(),
  seller_id       uuid not null default auth.uid() references sellers (id) on delete cascade,
  title           text not null,
  aliases         text[] not null default '{}',       -- other words for it in sale messages: labial, batom, lipstick
  category        text,
  purchase_cost   numeric(12,2) not null default 0 check (purchase_cost >= 0),
  retail_price    numeric(12,2) not null check (retail_price >= 0),
  wholesale_price numeric(12,2) check (wholesale_price >= 0),
  cash_price      numeric(12,2) check (cash_price >= 0),
  size            text,
  color           text,
  stock           integer not null default 0,         -- can dip below 0 if a count is wrong; the app warns
  is_archived     boolean not null default false,     -- rule 2: hidden from catalog and restock alerts
  archived_at     timestamptz,
  created_at      timestamptz not null default now()
);
create index products_seller_idx on products (seller_id) where not is_archived;


-- ---------------------------------------------------------------------------
-- Customers
-- ---------------------------------------------------------------------------

create table customers (
  id         uuid primary key default gen_random_uuid(),
  seller_id  uuid not null default auth.uid() references sellers (id) on delete cascade,
  name       text not null,
  phone      text,                                    -- optional, only for WhatsApp reminders
  created_at timestamptz not null default now()
);
create index customers_seller_idx on customers (seller_id);


-- ---------------------------------------------------------------------------
-- Sales
-- total_amount, amount_paid, debt_balance and payment_status are kept up to
-- date by triggers (see recalc_sale). The app should not write them directly.
-- ---------------------------------------------------------------------------

create table sales (
  id             uuid primary key default gen_random_uuid(),
  seller_id      uuid not null default auth.uid() references sellers (id) on delete cascade,
  customer_id    uuid references customers (id) on delete set null,   -- rule 3; NULL shows as "Customer deleted / walk-in"
  channel        text,                               -- whatsapp, instagram, persona, ...
  sold_at        timestamptz not null default now(),
  total_amount   numeric(12,2) not null default 0,
  amount_paid    numeric(12,2) not null default 0,
  debt_balance   numeric(12,2) not null default 0,
  payment_status payment_status not null default 'paid',
  written_off_at timestamptz,
  created_at     timestamptz not null default now()
);
create index sales_seller_idx on sales (seller_id, sold_at desc);
create index sales_customer_idx on sales (customer_id) where customer_id is not null;
create index sales_debt_idx on sales (seller_id) where debt_balance > 0;


-- ---------------------------------------------------------------------------
-- Sale items: one line per product sold, with a frozen snapshot of the product.
-- ---------------------------------------------------------------------------

create table sale_items (
  id             uuid primary key default gen_random_uuid(),
  sale_id        uuid not null references sales (id) on delete cascade,     -- rule 4
  seller_id      uuid not null default auth.uid() references sellers (id) on delete cascade,
  product_id     uuid references products (id) on delete set null,        -- link may go; snapshot stays
  -- Snapshot at the moment of the sale (rule 2). Reports use these, not the product row.
  product_title  text not null,
  size           text,
  color          text,
  unit_cost      numeric(12,2) not null default 0,
  unit_price     numeric(12,2) not null check (unit_price >= 0),
  price_type     text not null default 'retail' check (price_type in ('retail', 'wholesale', 'cash')),
  quantity       integer not null check (quantity > 0),
  line_total     numeric(12,2) generated always as (round(unit_price * quantity, 2)) stored,
  created_at     timestamptz not null default now()
);
create index sale_items_sale_idx on sale_items (sale_id);
create index sale_items_product_idx on sale_items (product_id) where product_id is not null;


-- ---------------------------------------------------------------------------
-- Payments: money actually received for a sale (the first one can be at the
-- moment of sale, e.g. "pagó la mitad").
-- ---------------------------------------------------------------------------

create table payments (
  id         uuid primary key default gen_random_uuid(),
  sale_id    uuid not null references sales (id) on delete cascade,        -- rule 4
  seller_id  uuid not null default auth.uid() references sellers (id) on delete cascade,
  paid_on    date not null default current_date,
  amount     numeric(12,2) not null check (amount > 0),
  method     text,                                    -- efectivo, yape, pix, otro, ...
  created_at timestamptz not null default now()
);
create index payments_sale_idx on payments (sale_id);


-- ---------------------------------------------------------------------------
-- Payment schedule: when the rest is due ("el resto el viernes", "en 2 cuotas").
-- Not in the original spec, but the app needs it for "Quién te debe" and the
-- Cobrar nudges.
-- ---------------------------------------------------------------------------

create table payment_schedule (
  id         uuid primary key default gen_random_uuid(),
  sale_id    uuid not null references sales (id) on delete cascade,
  seller_id  uuid not null default auth.uid() references sellers (id) on delete cascade,
  number     integer not null check (number > 0),
  due_on     date,
  amount     numeric(12,2) not null check (amount > 0),
  unique (sale_id, number)
);


-- ---------------------------------------------------------------------------
-- Daily nudges ("Lo que te toca hoy") and whether the seller acted on them.
-- ---------------------------------------------------------------------------

create table nudges (
  id          uuid primary key default gen_random_uuid(),
  seller_id   uuid not null default auth.uid() references sellers (id) on delete cascade,
  nudge_date  date not null default current_date,
  kind        text not null check (kind in ('cobrar', 'reponer', 'precio', 'promocionar', 'buenas_noticias')),
  sale_id     uuid references sales (id) on delete set null,
  product_id  uuid references products (id) on delete set null,
  customer_id uuid references customers (id) on delete set null,
  message     text,
  status      text not null default 'shown' check (status in ('shown', 'acted', 'skipped')),
  created_at  timestamptz not null default now()
);
create index nudges_seller_idx on nudges (seller_id, nudge_date desc);


-- ---------------------------------------------------------------------------
-- Consents: append-only record of each acceptance of the terms or privacy policy.
-- Kept when a seller deletes their account (legal/compliance-checklist.md §3),
-- with the seller link removed. Contains no sales or customer data.
-- ---------------------------------------------------------------------------

create table consents (
  id                uuid primary key default gen_random_uuid(),
  seller_id         uuid default auth.uid() references sellers (id) on delete set null,
  document          text not null check (document in ('terminos', 'privacidad')),
  document_version  text not null,
  document_language text not null,
  document_hash     text,
  action            text not null check (action in ('accepted', 'withdrawn')),
  accepted_at       timestamptz not null default now(),
  method            text not null,
  form_id           text not null,
  app_version       text,
  ui_language       text,
  ip_address        inet,
  user_agent        text
);


-- ===========================================================================
-- Rules as triggers
-- ===========================================================================

-- Recompute a sale's totals, balance and status from its lines and payments.
-- Rule 5: deleting a payment raises the balance and moves the status back
-- from 'paid' to 'partial' or 'credit'.
create or replace function recalc_sale(p_sale_id uuid) returns void
language plpgsql as $$
declare
  v_total numeric(12,2);
  v_paid  numeric(12,2);
begin
  select coalesce(sum(line_total), 0) into v_total from sale_items where sale_id = p_sale_id;
  select coalesce(sum(amount), 0)     into v_paid  from payments   where sale_id = p_sale_id;

  update sales s
     set total_amount   = v_total,
         amount_paid    = v_paid,
         debt_balance   = greatest(v_total - v_paid, 0),
         payment_status = case
                            when v_total - v_paid <= 0           then 'paid'::payment_status
                            when s.payment_status = 'written_off' then 'written_off'::payment_status
                            when v_paid > 0                      then 'partial'::payment_status
                            else                                      'credit'::payment_status
                          end
   where s.id = p_sale_id;     -- no row if the sale itself is being deleted
end $$;


-- Sale lines move the stock: selling takes it out, deleting a line (or the
-- whole sale, rule 4) puts it back. Then the sale is recalculated.
create or replace function sale_items_after_change() returns trigger
language plpgsql as $$
begin
  if tg_op in ('UPDATE', 'DELETE') and old.product_id is not null then
    update products set stock = stock + old.quantity where id = old.product_id;
  end if;
  if tg_op in ('INSERT', 'UPDATE') and new.product_id is not null then
    update products set stock = stock - new.quantity where id = new.product_id;
  end if;

  if tg_op = 'DELETE' then
    perform recalc_sale(old.sale_id);
  else
    perform recalc_sale(new.sale_id);
    if tg_op = 'UPDATE' and old.sale_id <> new.sale_id then
      perform recalc_sale(old.sale_id);
    end if;
  end if;
  return null;
end $$;

create trigger sale_items_after_change
  after insert or update or delete on sale_items
  for each row execute function sale_items_after_change();


-- Payments change the balance (rule 5).
create or replace function payments_after_change() returns trigger
language plpgsql as $$
begin
  if tg_op = 'DELETE' then
    perform recalc_sale(old.sale_id);
  else
    perform recalc_sale(new.sale_id);
    if tg_op = 'UPDATE' and old.sale_id <> new.sale_id then
      perform recalc_sale(old.sale_id);
    end if;
  end if;
  return null;
end $$;

create trigger payments_after_change
  after insert or update or delete on payments
  for each row execute function payments_after_change();


-- Rule 2: a product with sales is archived instead of deleted.
-- When the whole seller account is being deleted (rule 1), the seller row is
-- already gone, so the product is deleted normally.
create or replace function products_before_delete() returns trigger
language plpgsql as $$
begin
  if exists (select 1 from sellers where id = old.seller_id)
     and exists (select 1 from sale_items where product_id = old.id) then
    update products set is_archived = true, archived_at = now() where id = old.id;
    return null;                -- cancel the hard delete
  end if;
  return old;
end $$;

create trigger products_before_delete
  before delete on products
  for each row execute function products_before_delete();


-- Rule 3: a customer who still owes money cannot be deleted. The app shows a
-- warning and offers write_off_customer_debt() first.
create or replace function customers_before_delete() returns trigger
language plpgsql as $$
begin
  if exists (select 1 from sellers where id = old.seller_id)
     and exists (select 1 from sales
                  where customer_id = old.id
                    and debt_balance > 0
                    and payment_status <> 'written_off') then
    raise exception 'customer_has_debt'
      using detail = 'This customer still owes money. Resolve or write off the debt before deleting.',
            hint   = 'Call write_off_customer_debt(customer_id) to keep the records and mark the debt as lost.';
  end if;
  return old;
end $$;

create trigger customers_before_delete
  before delete on customers
  for each row execute function customers_before_delete();


-- Rule 3 (second path): give up on a customer's open debts. The sales and
-- their payment history stay, so revenue and losses remain correct.
create or replace function write_off_customer_debt(p_customer_id uuid) returns integer
language plpgsql as $$
declare
  v_count integer;
begin
  update sales
     set payment_status = 'written_off', written_off_at = now()
   where customer_id = p_customer_id
     and debt_balance > 0
     and payment_status <> 'written_off';
  get diagnostics v_count = row_count;
  return v_count;              -- number of sales written off
end $$;


-- ===========================================================================
-- Views the app reads
-- ===========================================================================

-- Catalog and restock alerts: archived products are left out (rule 2).
create view active_products with (security_invoker = true) as
  select * from products where not is_archived;

-- Sales with a display name; deleted customers show as a label (rule 3).
create view sales_with_customer with (security_invoker = true) as
  select s.*,
         coalesce(c.name, 'Customer deleted / walk-in') as customer_label
    from sales s
    left join customers c on c.id = s.customer_id;


-- ===========================================================================
-- Row-level security: each seller only sees their own rows.
-- ===========================================================================

alter table sellers          enable row level security;
alter table products         enable row level security;
alter table customers        enable row level security;
alter table sales            enable row level security;
alter table sale_items       enable row level security;
alter table payments         enable row level security;
alter table payment_schedule enable row level security;
alter table nudges           enable row level security;
alter table consents         enable row level security;

create policy "sellers: own row" on sellers
  for all to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy "products: own rows" on products
  for all to authenticated
  using (seller_id = auth.uid()) with check (seller_id = auth.uid());

create policy "customers: own rows" on customers
  for all to authenticated
  using (seller_id = auth.uid()) with check (seller_id = auth.uid());

create policy "sales: own rows" on sales
  for all to authenticated
  using (seller_id = auth.uid())
  with check (
    seller_id = auth.uid()
    and (customer_id is null or exists (select 1 from customers c where c.id = customer_id and c.seller_id = auth.uid()))
  );

create policy "sale_items: own rows" on sale_items
  for all to authenticated
  using (seller_id = auth.uid())
  with check (
    seller_id = auth.uid()
    and exists (select 1 from sales s where s.id = sale_id and s.seller_id = auth.uid())
    and (product_id is null or exists (select 1 from products p where p.id = product_id and p.seller_id = auth.uid()))
  );

create policy "payments: own rows" on payments
  for all to authenticated
  using (seller_id = auth.uid())
  with check (seller_id = auth.uid()
              and exists (select 1 from sales s where s.id = sale_id and s.seller_id = auth.uid()));

create policy "payment_schedule: own rows" on payment_schedule
  for all to authenticated
  using (seller_id = auth.uid())
  with check (seller_id = auth.uid()
              and exists (select 1 from sales s where s.id = sale_id and s.seller_id = auth.uid()));

create policy "nudges: own rows" on nudges
  for all to authenticated
  using (seller_id = auth.uid()) with check (seller_id = auth.uid());

-- Consents are append-only: a seller can add and read theirs, never edit or delete.
create policy "consents: insert own" on consents
  for insert to authenticated with check (seller_id = auth.uid());
create policy "consents: read own" on consents
  for select to authenticated using (seller_id = auth.uid());
