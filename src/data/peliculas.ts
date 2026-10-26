/**
 * Películas en las que ha trabajado KERAMBIT (carrusel de Trabajos).
 * Carteles en public/media/peliculas/ (formato vertical 2:3). Sin cartel se muestra una portada tipográfica.
 */
export interface Pelicula {
  titulo: string;
  anio?: string;
  estado?: string;
  trabajo: string;
  imdb: string;
  cartel?: string;
}

export const peliculas: Pelicula[] = [
  {
    titulo: 'Xtremo',
    anio: '2021',
    trabajo:
      'Idea original de Genaro Rodríguez y Teo García. Diseño de toda la acción, entrenamiento de actores y dirección de la acción en set.',
    imdb: 'https://www.imdb.com/title/tt11658120/',
    cartel: '/media/peliculas/xtremo.jpg',
  },
  {
    titulo: 'No matarás',
    anio: '2020',
    trabajo: 'Diseño de las escenas de acción, supervisión y ejecución en set.',
    imdb: 'https://www.imdb.com/title/tt4359330/',
    cartel: '/media/peliculas/no-mataras.jpg',
  },
  {
    titulo: 'Awareness',
    anio: '2023',
    trabajo:
      'Diseño de toda la acción, entrenamiento de actores y dirección de la acción en set, junto a un equipo de stunts local.',
    imdb: 'https://www.imdb.com/title/tt18556326/',
    cartel: '/media/peliculas/awareness.jpg',
  },
  {
    titulo: 'Rosebush Pruning',
    anio: '2026',
    trabajo: 'Trabajo de stunts en algunas acciones.',
    imdb: 'https://www.imdb.com/title/tt27844906/',
    cartel: '/media/peliculas/rosebush-pruning.jpg',
  },
  {
    titulo: 'The Last Resort',
    estado: 'En postproducción',
    trabajo: 'Diseño de toda la acción, entrenamiento de actores y dirección de la acción en set.',
    imdb: 'https://www.imdb.com/title/tt38969298/',
  },
];
