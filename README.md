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
| Textos de los servicios | `src/data/servicios.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
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

- Equipo: enlace al perfil de IMDb de cada miembro (campo `imdb` en `src/data/equipo.ts`; el enlace aparece solo cuando se rellena).
- Equipo: fotos de Jose Álvarez y Víctor Cerezuela.
- Reel completo para el botón "Ver reel" (lo prepara el equipo).
- Trabajos: material de cada proyecto.

## Decisiones de contenido

- No mencionar en la web: el número de escenas de acción (no siempre lo saben antes de enviar el guion), los idiomas en que se responde, tarifas ni condiciones económicas (se hablan en la llamada).
- Genaro aparece en Equipo, pero no como persona de contacto.

## Fases

1. Estructura y portada
2. Servicios y equipo (textos de servicios en borrador)
3. Trabajos y preguntas frecuentes ← **actual** (preguntas hechas; trabajos pendientes de material)
4. Contacto, SEO/GEO y datos estructurados
5. Dominio y publicación (quitar el modo pruebas)
