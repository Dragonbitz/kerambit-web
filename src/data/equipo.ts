/**
 * Equipo de KERAMBIT.
 * PENDIENTE: fotos, nombres y bios. Para añadir la foto de alguien, guarda la imagen en
 * public/equipo/ (por ejemplo genaro.jpg, formato vertical 4:5) y pon la ruta en `foto`.
 */
export interface Miembro {
  nombre: string;
  rol: string;
  bio?: string;
  foto?: string;
  contacto?: boolean;
}

export const equipo: Miembro[] = [
  {
    nombre: 'Genaro Rodríguez',
    rol: 'Contacto',
    bio: 'Responde en español, inglés y catalán.',
    contacto: true,
  },
  // PENDIENTE: resto del equipo. Las fichas sin nombre se muestran como "por confirmar".
  { nombre: '', rol: 'Stunts' },
  { nombre: '', rol: 'Stunts' },
  { nombre: '', rol: 'Diseño de acción' },
];
