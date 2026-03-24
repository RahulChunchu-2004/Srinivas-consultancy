/** Public site name (brand) used in titles and JSON-LD. */
export const SITE_NAME = 'TelivAI Solutions';

/** Default meta description when a route omits one (keep in sync with homepage messaging). */
export const DEFAULT_DESCRIPTION =
  'TelivAI Solutions delivers AI development, custom software, IT staffing, and enterprise platforms—automate smarter, optimize faster, and grow stronger.';

/**
 * Canonical origin for absolute URLs (OG, canonical, sitemap).
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.example.com).
 */
export function getSiteOrigin(): string {
  const fromEnv =
    (typeof import.meta !== 'undefined' && import.meta.env?.NEXT_PUBLIC_SITE_URL) ||
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) ||
    '';
  return String(fromEnv).replace(/\/+$/, '');
}

/** Path or absolute URL starting with / under the site origin. */
export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  const origin = getSiteOrigin();
  if (!origin) return p;
  return `${origin}${p}`;
}

export function defaultOgImageUrl(): string {
  return absoluteUrl('/images/TelivAI.png');
}
