# Client authentication

The main Next.js app follows the admin application's Better Auth + Convex integration, with public client signup enabled. It does not use the admin email allowlist, usernames, or administrator roles. Client accounts and onboarding live in this app's separate Convex deployment.

## Local development

Run `bun install`, `bun run dev:backend`, and `bun run dev` in separate terminals. The backend script selects cloud API port 3220 and HTTP action port 3221 so the admin app's backend can run independently on 3210/3211. The CLI writes `.env.local` for the deployment; keep that file private.

For a new local deployment without a Convex account, use `CONVEX_AGENT_MODE=anonymous bun run dev:backend`. Link a hosted Convex project before deploying the website; a local backend is reachable only on this computer.

Set `SITE_URL` on the Convex deployment to the exact Next.js origin (local default `http://localhost:3000`) and `BETTER_AUTH_SECRET` to a securely generated value of at least 32 characters. Use `bunx convex env set NAME VALUE`, taking care to avoid putting real secrets in committed files or logs. `.env.example` lists all required values. Development and production each need their own configuration.

## Sign-in methods

- Email/password: available now. Passwords require at least 12 characters. Signup creates a session and continues to `/onboarding`.
- Google: set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` on Convex.
- Facebook: set `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET` on Convex.

Each social button becomes enabled only when that provider's two credentials are present on the backend. Configure the OAuth applications with these callback URLs, replacing the origin for production:

```
http://localhost:3000/api/auth/callback/google
http://localhost:3000/api/auth/callback/facebook
```

Register the same site origin and callbacks in the providers' consoles. Facebook applications must allow the intended users and email permission. No OAuth credentials are bundled with this implementation.

## Integration points

`lib/auth-client.ts` supplies the browser client. `lib/auth-server.ts` supplies the Next.js proxy handlers, session token, live `getCurrentUser()`, and `requireUser(returnTo)`. Protected pages should call `requireUser()` and backend functions must independently call `authComponent.getAuthUser(ctx)` to verify ownership. Redirect targets are limited to client workspace routes.

The root provider connects Better Auth sessions to Convex's authenticated React queries. `/login` and `/signup` share `components/auth/auth-form.tsx` and `auth-shell.tsx`, using the landing application's brand, fonts, colors, and UI primitives. `SignOutButton` is reusable in the client workspace.

Sessions and credentials are stored by the Better Auth Convex component, never in onboarding answers. Do not request or save account passwords, payment secrets, or OAuth credentials in questionnaire responses.

Reference: [Convex Better Auth Next.js guide](https://labs.convex.dev/better-auth/framework-guides/next), [Better Auth Facebook configuration](https://better-auth.com/docs/1.6/authentication/facebook).
