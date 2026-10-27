-- VendeAI: email + password sign-in (Supabase Auth) and row-level security.
-- Run AFTER 0001_initial_schema.sql. Safe to run more than once.
--
-- What it does:
--   1. When someone creates an account, the database itself creates their
--      seller row and saves the two acceptances (terms, privacy) with the
--      server's clock.
--   2. Every table: a signed-in user can read and change only their own rows.
--      Separate rules for read, add, change and delete, so each one is clear.
--   3. Guest (anonymous) accounts are blocked everywhere, even if someone
--      turns them on in the dashboard by mistake.
--   4. The public (not signed in) key can't touch any table or function.


-- ===========================================================================
-- 1. New account -> seller row + consent records
-- ===========================================================================

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  m jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  c jsonb;
begin
  -- Only email accounts become sellers (no guest accounts).
  if new.email is null then return new; end if;

  -- What the sign-up form sent. It comes from the browser, so every value is checked.
  insert into public.sellers (id, name, contact, contact_type, country, language)
  values (
    new.id,
    left(coalesce(nullif(trim(m->>'name'), ''), split_part(new.email, '@', 1)), 40),
    new.email,
    'email',
    case when m->>'country' in ('MX', 'CO', 'PE', 'AR', 'CL', 'BR') then m->>'country' else 'MX' end,
    case when m->>'language' in ('es', 'pt', 'en') then m->>'language' else 'es' end
  )
  on conflict (id) do nothing;

  for c in select value from jsonb_array_elements(case when jsonb_typeof(m->'consents') = 'array' then m->'consents' else '[]'::jsonb end) loop
    if c->>'document' in ('terminos', 'privacidad') and coalesce(c->>'version', '') <> '' then
      insert into public.consents (seller_id, document, document_version, document_language, action,
                                   accepted_at, method, form_id, app_version, ui_language, user_agent)
      values (new.id, c->>'document', left(c->>'version', 20), left(coalesce(c->>'language', 'es'), 5), 'accepted',
              now(),                       -- the server's clock, not the phone's
              'checkbox', 'signup_v2', left(c->>'app_version', 20), left(m->>'language', 5), left(c->>'user_agent', 300));
    end if;
  end loop;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


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


-- ===========================================================================
-- 3. Not signed in = no access at all
-- ===========================================================================

revoke all on all tables in schema public from anon;
alter default privileges in schema public revoke all on tables from anon;
revoke execute on function public.write_off_customer_debt(uuid) from public, anon;
grant  execute on function public.write_off_customer_debt(uuid) to authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
