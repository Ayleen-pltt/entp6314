-- Part 3 of 3 (from 0002_auth_and_rls.sql): not signed in = no access.
-- ===========================================================================
-- 3. Not signed in = no access at all
-- ===========================================================================

revoke all on all tables in schema public from anon;
alter default privileges in schema public revoke all on tables from anon;
revoke execute on function public.write_off_customer_debt(uuid) from public, anon;
grant  execute on function public.write_off_customer_debt(uuid) to authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
