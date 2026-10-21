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
}

export const equipo: Miembro[] = [
  {
    nombre: 'Genaro Rodríguez',
    roles: ['Diseño de acción', 'Action supervisor'],
    foto: '/equipo/genaro.jpg',
  },
  {
    nombre: 'Iván Millán',
    roles: ['Stunt coordinator', 'Stunt performer'],
    foto: '/equipo/ivan.jpg',
  },
  {
    nombre: 'Jose Álvarez',
    roles: ['IA assistant', 'Stunt performer'],
    // PENDIENTE: foto.
  },
  {
    nombre: 'Víctor Cerezuela',
    roles: ['IA assistant', 'Stunt performer'],
    // PENDIENTE: foto.
  },
];
