# KERAMBIT · web

Web de KERAMBIT (stunts y diseño de acción para cine), hecha con [Astro](https://astro.build).

## Trabajar en local

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la web en dist/
```

## Publicación (Cloudflare Workers)

URL de pruebas: https://kerambit-web.thedomeshop.workers.dev

Cada `push` a `main` publica una versión nueva en la URL de pruebas.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (lee `wrangler.jsonc`)

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Email, teléfono/WhatsApp, vídeo de portada, reel | `src/config/site.ts` |
| Modo pruebas (no indexar en Google) | `site.preview` en `src/config/site.ts`, `public/robots.txt` y `public/_headers` |
| Menú y textos de interfaz | `src/i18n/ui.ts` |
| Titular y subtítulo de portada | `src/components/Hero.astro` |
| Tres beneficios | `src/components/Benefits.astro` |
| Colores y tipografías | `src/styles/global.css` |
| Vídeos e imágenes | `public/media/` |
| Logo (SVG) | `src/assets/` |

## Idiomas

Español en la raíz (`/`). Catalán (`/ca/`) e inglés (`/en/`) están preparados en la configuración, pero ocultos hasta tener textos validados.

## Fases

1. Estructura y portada ← **actual**
2. Servicios y equipo
3. Trabajos y preguntas frecuentes
4. Contacto, SEO/GEO y datos estructurados
5. Dominio y publicación (quitar el modo pruebas)
