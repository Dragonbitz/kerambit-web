/**
 * Preguntas frecuentes. Texto final del briefing, con los cambios acordados:
 * sin número de escenas ni idiomas de respuesta.
 * PENDIENTE: cuando exista el formulario, volver a mencionarlo en la última respuesta.
 */
export interface Pregunta {
  pregunta: string;
  respuesta: string[];
}

export const faq: Pregunta[] = [
  {
    pregunta: '¿Qué material necesitáis para empezar?',
    respuesta: [
      'Antes de recibir nada firmamos un acuerdo de confidencialidad.',
      'Si estás en guion, necesitamos el guion (final o provisional) y fotos de las localizaciones si las hay. Si ya has rodado, necesitamos una copia del material de la escena y confirmar que tienes las autorizaciones de los artistas.',
      'Si dispones de datos de cámara, óptica e iluminación, nos ayudan a igualar el resultado. Borramos todo al terminar el proyecto.',
    ],
  },
  {
    pregunta: '¿Podéis entrar solo en el montaje de una producción ya rodada?',
    respuesta: [
      'Sí, cuando la escena es de acción. Trabajamos con proxies del material y entregamos una guía de montaje para vuestro montador, o lo asistimos en la sala.',
      'No sustituimos a nadie: ayudamos a que la escena funcione mejor, ajustando ritmo, cortes y nivel de explicitud al tono de la película.',
    ],
  },
  {
    pregunta: '¿Cómo gestionáis los derechos de imagen?',
    respuesta: [
      'Antes de trabajar con la imagen de un artista, la productora nos confirma por escrito su autorización firmada. Sin ella, no generamos su rostro: estudiamos con la productora otras soluciones de efectos digitales.',
    ],
  },
  {
    pregunta: '¿Cómo se ahorra presupuesto con una previsualización?',
    respuesta: [
      'Porque todo el mundo llega al set sabiendo qué va a pasar. Cada departamento ve lo que le toca (armas, vestuario que se rompe, efectos, ficticios), el equipo sabe cómo y por dónde rodar cada toma, y dirección puede calcular si la escena necesita cuatro horas o un día entero.',
      'Menos improvisación en el set, menos tiempo perdido y un presupuesto más ajustado.',
    ],
  },
  {
    pregunta: '¿Qué diferencia hay entre rodaje clásico y rodaje híbrido con IA?',
    respuesta: [
      'El rodaje clásico graba todo en cámara, como siempre. El híbrido mantiene ese rodaje y usa la IA solo donde reduce riesgo o tiempo: un atropello más o menos violento sin que el stunt tenga que darlo todo, o un tiroteo en un espacio cerrado sin fogueo real.',
      'Cuál conviene lo decide la escena, y el coste lo vemos juntos en la llamada.',
    ],
  },
  {
    pregunta: '¿Cómo pido presupuesto o agendo una llamada?',
    respuesta: [
      'Escríbenos por email o por WhatsApp. Cuéntanos en qué fase está tu proyecto y concretamos una llamada o videollamada.',
    ],
  },
];
