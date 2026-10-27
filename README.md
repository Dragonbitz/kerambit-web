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
| Modo pruebas (no indexar en Google) | `site.preview` en `src/config/site.ts` (controla también `robots.txt`) y `public/_headers` |
| Menú y textos de interfaz | `src/i18n/ui.ts` |
| Titular y subtítulo de portada | `src/components/Hero.astro` |
| Tres beneficios | `src/components/Benefits.astro` |
| Textos de los servicios | `src/data/servicios.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Películas del carrusel | `src/data/peliculas.ts` y carteles en `public/media/peliculas/` |
| Vídeos de Vimeo | `src/data/videos.ts` |
| Citas de crítica | `src/data/criticas.ts` (siempre literales, con fuente y enlace) |
| Equipo (nombres, bios, fotos) | `src/data/equipo.ts` y fotos en `public/equipo/` |
| Colores y tipografías | `src/styles/global.css` |
| Vídeos e imágenes | `public/media/` |
| Logo (SVG) | `src/assets/` |

## Idiomas

Español en la raíz (`/`). Catalán (`/ca/`) e inglés (`/en/`) están preparados en la configuración, pero ocultos hasta tener textos validados.

Decidido (oct. 2026):

- Orden: primero toda la web en español; después inglés (prioritario, por clientes de EE. UU.) y catalán.
- Idioma automático según el **idioma del navegador**, no según el país de conexión:
  - Navegador en español → español. En catalán → catalán. Cualquier otro → inglés.
  - Solo en la primera visita a la portada. Si la persona elige idioma en el selector, se recuerda y no se vuelve a cambiar.
  - Nunca se redirige a buscadores; cada versión lleva sus etiquetas hreflang.
- Selector de idioma siempre visible cuando existan las versiones.

## Pendientes apuntados

- Formulario de contacto: aplazado (decisión oct. 2026). De momento, contacto por WhatsApp y email.

- Trabajos: cartel de Xtremo; carteles de No matarás y Awareness en mejor resolución (ahora ~260 px, de Wikipedia); cartel de The Last Resort cuando exista.

## SEO y GEO

- Mapa del sitio automático: `/sitemap-index.xml` (integración `@astrojs/sitemap`).
- `robots.txt` generado en `src/pages/robots.txt.ts`: bloquea todo en modo pruebas y, al publicar, permite e indica el mapa del sitio.
- `llms.txt` para IAs, generado en `src/pages/llms.txt.ts` con los mismos datos que la web.
- Datos estructurados (`src/data/schema.ts`): Organization + WebSite en portada, Service en cada servicio, FAQPage en preguntas, VideoObject en cada vídeo.
- Sin dirección física: empresa de servicios; se indica la zona de trabajo (España, Estados Unidos, internacional).

## Checklist de lanzamiento (fase 5)

1. Dominio conectado en Cloudflare (DNS revisados, correo comprobado).
2. `site` en `astro.config.mjs` → dominio definitivo.
3. `preview: false` en `src/config/site.ts`.
4. Borrar la regla `X-Robots-Tag` de `public/_headers`.
5. Redirecciones 301 desde la web antigua, si estaba indexada.
6. Dar de alta el dominio en Google Search Console y enviar `/sitemap-index.xml`.
7. Vimeo: limitar la inserción de vídeos al dominio definitivo (opcional, plan de pago).

## Decisiones de contenido

- No mencionar en la web: el número de escenas de acción (no siempre lo saben antes de enviar el guion), los idiomas en que se responde, tarifas ni condiciones económicas (se hablan en la llamada).
- Genaro aparece en Equipo, pero no como persona de contacto.

## Fases

1. Estructura y portada
2. Servicios y equipo (textos de servicios en borrador)
3. Trabajos y preguntas frecuentes ← **actual** (preguntas hechas; trabajos pendientes de material)
4. Contacto, SEO/GEO y datos estructurados ← hecho (formulario aplazado; falta aviso legal)
5. Dominio y publicación (quitar el modo pruebas)
