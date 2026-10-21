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
    email: 'kerambit.action@gmail.com',
    // Teléfono y WhatsApp: mismo número, con prefijo internacional.
    phoneDisplay: '+34 655 519 325',
    phoneE164: '34655519325',
  },

  hero: {
    // Vídeo de portada en dos versiones: la web elige la vertical en pantallas en vertical (móvil).
    // Formato: MP4 H.264, mudo. Imagen fija (poster) para cuando no carga o mientras carga.
    horizontal: { video: '/media/portada-16x9.mp4', poster: '/media/portada-16x9.jpg' },
    vertical: { video: '/media/portada-9x16.mp4', poster: '/media/portada-9x16.jpg' },
    // PENDIENTE: reel completo (se abre al hacer clic). Vacío = el botón no se muestra.
    fullReel: '',
  },
} as const;

export const whatsappUrl = (text = '') =>
  `https://wa.me/${site.contact.phoneE164}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
