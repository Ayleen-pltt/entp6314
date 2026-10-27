-- Part 2 of 3 (from 0002_auth_and_rls.sql): own-rows-only rules.
-- ===========================================================================
-- 2. Row-level security: own rows only
-- ===========================================================================

-- Remove the earlier rules (from 0001 or an earlier run of this file).
do $$
declare r record;
begin
  for r in select policyname, tablename from pg_policies
           where schemaname = 'public'
             and tablename in ('sellers', 'products', 'customers', 'sales', 'sale_items',
                               'payments', 'payment_schedule', 'nudges', 'consents')
  loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

alter table public.sellers          enable row level security;
alter table public.products         enable row level security;
alter table public.customers        enable row level security;
alter table public.sales            enable row level security;
alter table public.sale_items       enable row level security;
alter table public.payments         enable row level security;
alter table public.payment_schedule enable row level security;
alter table public.nudges           enable row level security;
alter table public.consents         enable row level security;

-- No guest accounts, on every table. "Restrictive" means this must ALSO pass,
-- on top of the own-rows rules below.
do $$
declare t text;
begin
  foreach t in array array['sellers', 'products', 'customers', 'sales', 'sale_items',
                           'payments', 'payment_schedule', 'nudges', 'consents']
  loop
    execute format($p$
      create policy "%1$s: no guest accounts" on public.%1$I
        as restrictive for all to authenticated
        using (coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false)
        with check (coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false)
    $p$, t);
  end loop;
end $$;

-- Sellers: your own profile. (It is created by the sign-up trigger above.)
create policy "sellers: read own"   on public.sellers for select to authenticated using (id = (select auth.uid()));
create policy "sellers: add own"    on public.sellers for insert to authenticated with check (id = (select auth.uid()));
create policy "sellers: change own" on public.sellers for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));
create policy "sellers: delete own" on public.sellers for delete to authenticated using (id = (select auth.uid()));

-- Products, customers and nudges: rows whose seller_id is you.
do $$
declare t text;
begin
  foreach t in array array['products', 'customers', 'nudges'] loop
    execute format('create policy "%1$s: read own"   on public.%1$I for select to authenticated using (seller_id = (select auth.uid()))', t);
    execute format('create policy "%1$s: add own"    on public.%1$I for insert to authenticated with check (seller_id = (select auth.uid()))', t);
    execute format('create policy "%1$s: change own" on public.%1$I for update to authenticated using (seller_id = (select auth.uid())) with check (seller_id = (select auth.uid()))', t);
    execute format('create policy "%1$s: delete own" on public.%1$I for delete to authenticated using (seller_id = (select auth.uid()))', t);
  end loop;
end $$;

-- Sales: yours, and the customer (if any) must also be yours.
create policy "sales: read own"   on public.sales for select to authenticated using (seller_id = (select auth.uid()));
create policy "sales: add own"    on public.sales for insert to authenticated
  with check (seller_id = (select auth.uid())
              and (customer_id is null or exists (select 1 from public.customers c where c.id = customer_id and c.seller_id = (select auth.uid()))));
create policy "sales: change own" on public.sales for update to authenticated
  using (seller_id = (select auth.uid()))
  with check (seller_id = (select auth.uid())
              and (customer_id is null or exists (select 1 from public.customers c where c.id = customer_id and c.seller_id = (select auth.uid()))));
create policy "sales: delete own" on public.sales for delete to authenticated using (seller_id = (select auth.uid()));

-- Sale lines: yours, inside one of your sales, and the product (if any) is yours.
create policy "sale_items: read own"   on public.sale_items for select to authenticated using (seller_id = (select auth.uid()));
create policy "sale_items: add own"    on public.sale_items for insert to authenticated
  with check (seller_id = (select auth.uid())
              and exists (select 1 from public.sales s where s.id = sale_id and s.seller_id = (select auth.uid()))
              and (product_id is null or exists (select 1 from public.products p where p.id = product_id and p.seller_id = (select auth.uid()))));
create policy "sale_items: change own" on public.sale_items for update to authenticated
  using (seller_id = (select auth.uid()))
  with check (seller_id = (select auth.uid())
              and exists (select 1 from public.sales s where s.id = sale_id and s.seller_id = (select auth.uid()))
              and (product_id is null or exists (select 1 from public.products p where p.id = product_id and p.seller_id = (select auth.uid()))));
create policy "sale_items: delete own" on public.sale_items for delete to authenticated using (seller_id = (select auth.uid()));

-- Payments and payment dates: yours, and attached to one of your sales.
do $$
declare t text;
begin
  foreach t in array array['payments', 'payment_schedule'] loop
    execute format('create policy "%1$s: read own"   on public.%1$I for select to authenticated using (seller_id = (select auth.uid()))', t);
    execute format('create policy "%1$s: add own"    on public.%1$I for insert to authenticated with check (seller_id = (select auth.uid()) and exists (select 1 from public.sales s where s.id = sale_id and s.seller_id = (select auth.uid())))', t);
    execute format('create policy "%1$s: change own" on public.%1$I for update to authenticated using (seller_id = (select auth.uid())) with check (seller_id = (select auth.uid()) and exists (select 1 from public.sales s where s.id = sale_id and s.seller_id = (select auth.uid())))', t);
    execute format('create policy "%1$s: delete own" on public.%1$I for delete to authenticated using (seller_id = (select auth.uid()))', t);
  end loop;
end $$;

-- Consents: you can add and read your own. Nobody can change or delete one
-- from the app (no update or delete rule = not allowed).
create policy "consents: read own" on public.consents for select to authenticated using (seller_id = (select auth.uid()));
create policy "consents: add own"  on public.consents for insert to authenticated with check (seller_id = (select auth.uid()));


