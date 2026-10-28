-- 0003: file uploads (Supabase Storage). Run once in the SQL Editor, after 0002.
--
-- Three private buckets, created in the dashboard: comprobantes (payment proof),
-- catalogos (catalogs and product photos) and stock (supplier lists, invoices, stock sheets).
-- Every file is saved as <bucket>/<user id>/<time>-<name>, so the first folder is its owner.
--
-- 1. The buckets stay private, and Storage itself refuses anything that is not JPG, PNG or PDF
--    (plus Excel .xlsx/.xls in "stock"), or is over 5 MB, even if someone skips the app's own check.
update storage.buckets
   set public = false,
       file_size_limit = 5242880,
       allowed_mime_types = array['image/jpeg', 'image/png', 'application/pdf']
 where id in ('comprobantes', 'catalogos');

update storage.buckets
   set public = false,
       file_size_limit = 5242880,
       allowed_mime_types = array['image/jpeg', 'image/png', 'application/pdf',
         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
 where id = 'stock';

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
