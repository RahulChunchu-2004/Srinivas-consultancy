import type { MetaDescriptor } from 'react-router';
import { DEFAULT_DESCRIPTION, SITE_NAME, absoluteUrl, defaultOgImageUrl } from './site';
import { breadcrumbJsonLd, jsonLdMeta } from './jsonld';

export type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
};

/**
 * Per-route meta: title, description, OG/Twitter, canonical, optional BreadcrumbList JSON-LD.
 */
export function pageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  ogImage = defaultOgImageUrl(),
  ogType = 'website',
}: PageMetaInput): MetaDescriptor[] {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  const canonical = absoluteUrl(pathname);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  const descriptors: MetaDescriptor[] = [
    { title: fullTitle },
    { name: 'description', content: description },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: ogType },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: SITE_NAME },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
    { tagName: 'link', rel: 'canonical', href: canonical },
  ];

  const crumbs = breadcrumbJsonLd(pathname);
  if (crumbs) descriptors.push(jsonLdMeta(crumbs));

  return descriptors;
}
