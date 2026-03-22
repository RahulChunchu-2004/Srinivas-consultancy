import type { MetaDescriptor } from 'react-router';
import { SITE_NAME, defaultOgImageUrl, getSiteOrigin } from './site';

export function jsonLdMeta(data: Record<string, unknown>): MetaDescriptor {
  return { 'script:ld+json': data as never };
}

const sameAs: string[] = [];

export function organizationAndWebsiteGraph(): Record<string, unknown> {
  const origin = getSiteOrigin();
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: defaultOgImageUrl(),
  };
  const site: Record<string, unknown> = {
    '@type': 'WebSite',
    name: SITE_NAME,
    inLanguage: 'en',
  };
  if (origin) {
    org['@id'] = `${origin}/#organization`;
    org.url = origin;
    site['@id'] = `${origin}/#website`;
    site.url = origin;
    site.publisher = { '@id': `${origin}/#organization` };
  }
  if (sameAs.length) org.sameAs = sameAs;

  return {
    '@context': 'https://schema.org',
    '@graph': [org, site],
  };
}

/** BreadcrumbList for paths with at least one segment after `/`. */
export function breadcrumbJsonLd(pathname: string): Record<string, unknown> | null {
  const origin = getSiteOrigin();
  if (!origin) return null;

  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return null;

  const segments = clean.split('/').filter(Boolean);
  const items: { '@type': string; position: number; name: string; item: string }[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${origin}/`,
    },
  ];

  let acc = '';
  for (let i = 0; i < segments.length; i++) {
    acc += `/${segments[i]}`;
    const name = humanizeSegment(segments[i]);
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name,
      item: `${origin}${acc}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function humanizeSegment(segment: string): string {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
