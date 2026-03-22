import { PUBLIC_PATHS } from '@/app/seo/public-paths';
import { getSiteOrigin } from '@/app/seo/site';
import type { LoaderFunctionArgs } from 'react-router';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const origin = getSiteOrigin() || `${url.protocol}//${url.host}`;
  const lastmod = new Date().toISOString().slice(0, 10);
  const urlEntries = PUBLIC_PATHS.map((path) => {
    const loc = path === '/' ? `${origin}/` : `${origin}${path}`;
    const depth = path === '/' ? 0 : path.split('/').filter(Boolean).length;
    const priority = path === '/' ? '1.0' : depth <= 1 ? '0.9' : '0.8';
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
