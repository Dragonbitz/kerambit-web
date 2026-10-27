/**
 * Equipo de KERAMBIT.
 * Para añadir la foto de alguien, guarda la imagen en public/equipo/
 * (formato vertical 4:5, por ejemplo jose.jpg) y pon la ruta en `foto`.
 */
export interface Miembro {
  nombre: string;
  roles: string[];
  bio?: string;
  foto?: string;
  /** Enlace al perfil de IMDb. Si está vacío, no se muestra. */
  imdb?: string;
}

export const equipo: Miembro[] = [
  {
    nombre: 'Genaro Rodríguez',
    roles: ['Diseño de acción', 'Action supervisor'],
    imdb: 'https://www.imdb.com/name/nm7451482/',
    foto: '/equipo/genaro.jpg',
  },
  {
    nombre: 'Iván Millán',
    roles: ['Stunt coordinator', 'Stunt performer'],
    imdb: 'https://www.imdb.com/name/nm13778777/',
    foto: '/equipo/ivan.jpg',
  },
  {
    nombre: 'Jose Álvarez-Boze',
    roles: ['AI assistant', 'Stunt performer'],
    imdb: 'https://www.imdb.com/name/nm11000658/',
    foto: '/equipo/jose.jpg',
  },
  {
    nombre: 'Víctor Cerezuela',
    roles: ['AI assistant', 'Stunt performer'],
    imdb: 'https://www.imdb.com/name/nm5895321/',
    foto: '/equipo/victor.jpg',
  },
];
