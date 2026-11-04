-- 0003: file uploads (Supabase Storage). Run once in the SQL Editor, after 0002.
--
-- Three private buckets: comprobantes (payment proof), catalogos (catalogs and product photos)
-- and stock (supplier lists, invoices, stock sheets). This file creates them if they are missing.
-- Every file is saved as <bucket>/<user id>/<time>-<name>, so the first folder is its owner.
--
-- 1. The buckets are private, and Storage itself refuses anything that is not JPG, PNG or PDF
--    (plus Excel .xlsx/.xls in "stock"), or is over 5 MB, even if someone skips the app's own check.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types) values
  ('comprobantes', 'comprobantes', false, 5242880, array['image/jpeg', 'image/png', 'application/pdf']),
  ('catalogos', 'catalogos', false, 5242880, array['image/jpeg', 'image/png', 'application/pdf']),
  ('stock', 'stock', false, 5242880, array['image/jpeg', 'image/png', 'application/pdf',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- 2. A signed-in seller (not a guest) can only list, open, add, replace and delete files
--    inside their own folder. Nobody else, and nothing with the public key.
drop policy if exists "vendeai files: own folder only" on storage.objects;
create policy "vendeai files: own folder only"
  on storage.objects
  for all
  to authenticated
  using (
    bucket_id in ('comprobantes', 'catalogos', 'stock')
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false
  )
  with check (
    bucket_id in ('comprobantes', 'catalogos', 'stock')
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and coalesce((select (auth.jwt() ->> 'is_anonymous')::boolean), false) = false
  );
