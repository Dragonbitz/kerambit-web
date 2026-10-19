// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // PENDIENTE: dominio definitivo. Mientras tanto, la URL de pruebas de Cloudflare.
  site: 'https://kerambit-web.pages.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      // Español en la raíz (/), catalán en /ca/ e inglés en /en/ cuando haya textos.
      prefixDefaultLocale: false,
    },
  },
});
