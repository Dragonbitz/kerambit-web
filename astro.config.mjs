// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PENDIENTE: dominio definitivo. Mientras tanto, la URL de pruebas de Cloudflare Workers.
  site: 'https://kerambit-web.thedomeshop.workers.dev',
  integrations: [
    // Mapa del sitio (sitemap-index.xml): la lista de páginas para los buscadores.
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      // Español en la raíz (/), catalán en /ca/ e inglés en /en/ cuando haya textos.
      prefixDefaultLocale: false,
    },
  },
});
