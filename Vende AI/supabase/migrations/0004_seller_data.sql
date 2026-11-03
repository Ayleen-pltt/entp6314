-- ===========================================================================
-- VendeAI: the seller's notebook in her account (phone first, then sync)
-- Run after 0001, 0002 (and 0003) in the Supabase SQL Editor. Safe to run again.
--
-- The app keeps working on the phone, offline too, and uploads a copy of the
-- whole notebook (sales, products, customers, payments due, "Tu negocio",
-- change log) here a moment later. One row per seller. `rev` goes up by one on
-- every upload; the app only overwrites the revision it last saw, so two
-- phones never silently undo each other: if the copy moved on, the app merges.
--
-- The tables in 0001 (sales, sale_items, payments...) stay for the real,
-- row-by-row database later. They are not filled yet: their triggers change
-- stock on their own, which would fight the app's own stock count.
-- ===========================================================================

create table if not exists public.seller_data (
  seller_id  uuid primary key default auth.uid() references public.sellers (id) on delete cascade,
  data       jsonb not null,
  rev        bigint not null default 1 check (rev > 0),
  updated_at timestamptz not null default now(),
  -- A notebook is small; this stops anyone using the table as free storage.
  constraint seller_data_size check (pg_column_size(data) < 2000000)
);

alter table public.seller_data enable row level security;

drop policy if exists "seller_data: no guest accounts" on public.seller_data;
drop policy if exists "seller_data: read own"   on public.seller_data;
drop policy if exists "seller_data: add own"    on public.seller_data;
drop policy if exists "seller_data: change own" on public.seller_data;
drop policy if exists "seller_data: delete own" on public.seller_data;

create policy "seller_data: no guest accounts" on public.seller_data
  as restrictive for all to authenticated
  using (coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false)
  with check (coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false);
create policy "seller_data: read own"   on public.seller_data for select to authenticated using (seller_id = (select auth.uid()));
create policy "seller_data: add own"    on public.seller_data for insert to authenticated with check (seller_id = (select auth.uid()));
create policy "seller_data: change own" on public.seller_data for update to authenticated using (seller_id = (select auth.uid())) with check (seller_id = (select auth.uid()));
create policy "seller_data: delete own" on public.seller_data for delete to authenticated using (seller_id = (select auth.uid()));

-- Same as every other table: the public key reaches nothing, signed-in sellers only their row.
revoke all on public.seller_data from anon;
grant select, insert, update, delete on public.seller_data to authenticated;
