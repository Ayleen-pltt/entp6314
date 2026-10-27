-- Part 1 of 3 (from 0002_auth_and_rls.sql): new account -> seller row + consents.
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


