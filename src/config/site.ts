/**
 * Datos de KERAMBIT que se reutilizan en toda la web.
 * Todo lo marcado como PENDIENTE es provisional: cámbialo aquí y se actualiza en todas las páginas.
 */
export const site = {
  name: 'KERAMBIT',

  // Mientras sea `true`, la web pide a Google y demás buscadores que no la indexen.
  // Pasar a `false` solo en la fase 5 (dominio y publicación).
  preview: true,

  contact: {
    person: 'Genaro Rodríguez',
    // PENDIENTE: email profesional.
    email: 'hola@kerambit.example',
    // PENDIENTE: teléfono / WhatsApp con prefijo internacional (mismo número para ambos).
    phoneDisplay: '+34 600 000 000',
    phoneE164: '34600000000',
    languages: 'español, catalán e inglés',
  },

  hero: {
    // PENDIENTE: sustituir por el corte de portada del reel (10-15 s, mudo, ligero) y su imagen fija.
    loopVideo: '/media/portada-provisional.mp4',
    poster: '/media/portada-provisional.jpg',
    // PENDIENTE: reel completo (se abre al hacer clic). Vacío = el botón no se muestra.
    fullReel: '',
  },
} as const;

export const whatsappUrl = (text = '') =>
  `https://wa.me/${site.contact.phoneE164}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
