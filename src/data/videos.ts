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
}

export const videos: Video[] = [
  {
    slug: 'showreel',
    vimeoId: '1239454335',
    titulo: 'Showreel KERAMBIT',
    // PENDIENTE: validar descripción con el equipo.
    descripcion: 'Showreel del equipo KERAMBIT con una selección de escenas de acción y stunts en las que hemos trabajado.',
  },
  {
    slug: 'awareness-previsualizacion-vs-final',
    vimeoId: '1239454338',
    titulo: 'Awareness: previsualización y metraje final',
    descripcion:
      'Comparación entre la previsualización de una escena de acción y cómo quedó en el metraje final de la película Awareness.',
  },
  {
    slug: 'previsualizaciones-compilacion',
    vimeoId: '1239454334',
    titulo: 'Previsualizaciones de escenas de acción',
    descripcion: 'Compilación de previsualizaciones de escenas de acción que hemos hecho para varias películas.',
  },
];

export const getVideo = (slug: string) => videos.find((v) => v.slug === slug);

export const vimeoEmbedUrl = (v: Video) => {
  const params = new URLSearchParams({ autoplay: '1', dnt: '1', title: '0', byline: '0', portrait: '0' });
  if (v.hash) params.set('h', v.hash);
  return `https://player.vimeo.com/video/${v.vimeoId}?${params}`;
};
