/**
 * Convex connection settings.
 *
 * Both values are inlined into the client bundle at build time, so they must be
 * present in every Vercel environment that should run authentication. Keeping
 * them in one place lets the site render its public pages when a preview
 * deployment does not have Convex configured, instead of failing the build.
 */
export const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
export const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;

export const isConvexConfigured = Boolean(convexUrl && convexSiteUrl);
