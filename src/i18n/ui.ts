/**
 * Textos de la interfaz por idioma.
 * El catalán y el inglés están preparados pero ocultos hasta que haya traducciones validadas.
 */
export const languages = { es: 'Español', ca: 'Català', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

// Idiomas que se muestran en el selector. Añadir 'ca' y 'en' cuando sus textos estén listos.
export const visibleLangs: Lang[] = ['es'];

export const nav = {
  es: [
    { href: '/servicios/', label: 'Servicios' },
    { href: '/equipo/', label: 'Equipo' },
    { href: '/trabajos/', label: 'Trabajos' },
    { href: '/preguntas-frecuentes/', label: 'Preguntas' },
    { href: '/contacto/', label: 'Contacto' },
  ],
} as const;

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    whatsapp: 'WhatsApp',
    email: 'Email',
    contactCta: 'Pide presupuesto',
    wip: 'En preparación',
    footerTagline: 'Stunts y diseño de acción para cine.',
    previewNotice: 'Versión de pruebas',
  },
} as const;
