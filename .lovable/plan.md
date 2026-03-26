

## Problem

The admin panel exists at `/admin` but there is no link to it from the main site. The `UserMenu` component only shows "Sair" (logout) when logged in -- no "Painel Admin" link. The user needs a visible way to access the admin panel after logging in.

## Plan

### 1. Add admin link to UserMenu

Modify `src/components/UserMenu.tsx` to:
- Check if the logged-in user has the `admin` role (query `user_roles` table)
- If admin, show a "Painel Admin" menu item linking to `/admin`

### 2. Implementation details

- Add a `useEffect` + state to check admin role via `supabase.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').maybeSingle()`
- Add a `DropdownMenuItem` with a `Link` to `/admin` with a shield/settings icon, shown only when `isAdmin` is true
- Place it above the "Sair" option in the dropdown

This is a single-file change to `src/components/UserMenu.tsx`.

