import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { servicios } from '../data/servicios';
import { equipo } from '../data/equipo';
import { peliculas } from '../data/peliculas';
import { faq } from '../data/faq';
import { videos } from '../data/videos';

// Resumen en texto para IAs (https://llmstxt.org). Se genera con los mismos datos que la web.
export const GET: APIRoute = ({ site: base }) => {
  const url = (p: string) => new URL(p, base).href;
  const lines = [
    `# ${site.name}`,
    '',
    '> Equipo de stunts y diseño de acción para cine con más de 20 años de experiencia. Diseña la acción de una película desde el guion: previsualizaciones para que el director vea cómo puede quedar la escena, entrenamiento con actores, coordinación de la acción en rodaje y asistencia de montaje. Ofrece, como opción que la productora elige escena a escena, rodaje híbrido con IA donde reduce riesgo o tiempo.',
    '',
    'Trabaja con productoras y directores en España y a nivel internacional. La IA refuerza al artista, no lo sustituye.',
    '',
    '## Servicios',
    '',
    ...servicios.map((s) => `- [${s.titulo}](${url(`/servicios/${s.slug}/`)}): ${s.resumen}`),
    '',
    '## Películas',
    '',
    ...peliculas.map((p) => `- ${p.titulo}${p.anio ? ` (${p.anio})` : p.estado ? ` (${p.estado.toLowerCase()})` : ''}: ${p.trabajo} IMDb: ${p.imdb}`),
    '',
    '## Equipo',
    '',
    ...equipo.map((m) => `- ${m.nombre}: ${m.roles.join(', ')}${m.imdb ? `. IMDb: ${m.imdb}` : ''}`),
    '',
    '## Vídeos',
    '',
    ...videos.map((v) => `- ${v.titulo}: ${v.descripcion} https://vimeo.com/${v.vimeoId}`),
    '',
    '## Preguntas frecuentes',
    '',
    ...faq.map((q) => `- ${q.pregunta} ${q.respuesta.join(' ')}`),
    '',
    '## Contacto',
    '',
    `- Email: ${site.contact.email}`,
    `- Teléfono y WhatsApp: ${site.contact.phoneDisplay}`,
    `- Web: ${url('/contacto/')}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
