/**
 * Vídeos alojados en Vimeo. Cada uno lleva una descripción en texto de lo que se ve,
 * porque buscadores e IAs no ven vídeo.
 *
 * En Vimeo, cada vídeo debe estar en "Cualquiera" u "Oculto" y permitir la inserción en esta web.
 * Si el vídeo es "Oculto", su enlace lleva un código extra (vimeo.com/ID/CODIGO): ponlo en `hash`.
 */
export interface Video {
  slug: string;
  vimeoId: string;
  hash?: string;
  titulo: string;
  descripcion: string;
  /** Imagen de portada (descargada de Vimeo a public/media/vimeo/). */
  poster: string;
  /** Proporción del vídeo, por ejemplo '16 / 9'. */
  ratio: string;
  /** Duración en segundos y fecha de subida (para los datos estructurados). */
  duracion: number;
  subido: string;
}

export const videos: Video[] = [
  {
    slug: 'showreel',
    vimeoId: '1239454335',
    titulo: 'Showreel Genaro Rodríguez',
    descripcion: 'Selección de escenas de acción diseñadas por Genaro Rodríguez, diseñador de acción al frente de KERAMBIT.',
    poster: '/media/vimeo/1239454335.jpg',
    ratio: '16 / 9',
    duracion: 260,
    subido: '2026-10-26',
  },
  {
    slug: 'awareness-previsualizacion-vs-final',
    vimeoId: '1239454338',
    titulo: 'Awareness: previsualización y metraje final',
    descripcion:
      'Comparación entre la previsualización de una escena de acción y cómo quedó en el metraje final de la película Awareness.',
    poster: '/media/vimeo/1239454338.jpg',
    ratio: '1280 / 533',
    duracion: 55,
    subido: '2026-10-26',
  },
  {
    slug: 'previsualizaciones-compilacion',
    vimeoId: '1239454334',
    titulo: 'Previsualizaciones de escenas de acción',
    descripcion: 'Compilación de previsualizaciones de escenas de acción que hemos hecho para varias películas.',
    poster: '/media/vimeo/1239454334.jpg',
    ratio: '16 / 9',
    duracion: 219,
    subido: '2026-10-26',
  },
];

export const formatDuracion = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

/** Datos estructurados VideoObject para buscadores e IAs. */
export const videoJsonLd = (v: Video, site: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.titulo,
  description: v.descripcion,
  thumbnailUrl: new URL(v.poster, site).href,
  uploadDate: v.subido,
  duration: `PT${Math.floor(v.duracion / 60)}M${v.duracion % 60}S`,
  embedUrl: `https://player.vimeo.com/video/${v.vimeoId}`,
  contentUrl: `https://vimeo.com/${v.vimeoId}`,
  inLanguage: 'es',
});

export const getVideo = (slug: string) => videos.find((v) => v.slug === slug);

export const vimeoEmbedUrl = (v: Video) => {
  const params = new URLSearchParams({ autoplay: '1', dnt: '1', title: '0', byline: '0', portrait: '0' });
  if (v.hash) params.set('h', v.hash);
  return `https://player.vimeo.com/video/${v.vimeoId}?${params}`;
};
