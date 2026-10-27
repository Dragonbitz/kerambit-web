import type { APIRoute } from 'astro';
import { site } from '../config/site';

// En modo pruebas se bloquea todo; al publicar, se permite y se indica el mapa del sitio.
export const GET: APIRoute = ({ site: base }) => {
  const body = site.preview
    ? '# Fase de pruebas: no indexar.\nUser-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', base).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
