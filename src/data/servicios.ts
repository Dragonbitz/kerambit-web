/**
 * Servicios de KERAMBIT, contados como un relevo de cuatro tramos.
 * El tramo 04 tiene dos páginas (montaje y reshoots) porque cada una es un tema propio para SEO.
 *
 * BORRADOR: todos los textos están pendientes de validar con Jose y el equipo.
 * Reglas del briefing: sin plazos ni precios, sin "sin riesgo" ni "ahorras X",
 * sin mencionar técnicas concretas. Usar "reduce el riesgo" y "presupuesto más ajustado".
 *
 * Para añadir un servicio nuevo ("Más servicios"), basta con añadir una entrada a esta lista.
 */
export interface Servicio {
  slug: string;
  tramo: string;
  titulo: string;
  /** Frase bajo el título de la página, opcional. */
  subtitulo?: string;
  /** Nombre corto para el relevo, si el título es largo. */
  corto?: string;
  /** Frase corta para listados y meta description. */
  resumen: string;
  intro: string;
  secciones: { titulo: string; texto?: string; puntos?: string[] }[];
  /** Cómo encaja la opción híbrida con IA en este tramo. */
  ia: string;
  /** Vídeos de trabajos (slugs de src/data/videos.ts). */
  videos?: string[];
  borrador: boolean;
}

export const tramos = [
  { n: '01', titulo: 'Diseño de acción desde guion', slugs: ['diseno-de-accion'] },
  { n: '02', titulo: 'Previsualización y entrenamiento', slugs: ['previsualizacion', 'entrenamiento'] },
  { n: '03', titulo: 'Rodaje', slugs: ['rodaje'] },
  { n: '04', titulo: 'Montaje y reshoots', slugs: ['montaje', 'reshoots'] },
];

export const servicios: Servicio[] = [
  {
    slug: 'diseno-de-accion',
    tramo: '01',
    titulo: 'Diseño de acción desde guion',
    resumen: 'Leemos el guion y diseñamos cada escena de acción antes de rodar.',
    intro:
      'Partimos del guion, final o provisional. Diseñamos cada escena de acción pensando en la historia, en el tono de la película y en lo que se puede rodar con tu presupuesto.',
    secciones: [
      {
        titulo: 'Qué recibes',
        puntos: [
          'Un desglose de las escenas de acción del guion.',
          'Una propuesta de coreografía e ideas que encajen en el tono del proyecto.',
          'Lo que necesita cada departamento: armas, vestuario, efectos y ficticios.',
          'Datos para que la productora ajuste el presupuesto.',
        ],
      },
      {
        titulo: 'Cuándo entrar',
        texto:
          'En preproducción, cuanto antes mejor. Si el guion todavía cambia, trabajamos sobre la versión provisional y la actualizamos contigo.',
      },
    ],
    ia: 'Si una escena lo pide, te señalamos qué planos pueden rodarse en híbrido con IA para reducir riesgo o tiempo. La decisión es tuya, escena a escena.',
    borrador: true,
  },
  {
    slug: 'previsualizacion',
    tramo: '02',
    titulo: 'Previsualización',
    resumen: 'Grabamos y montamos la escena antes del rodaje para que todo el equipo sepa qué va a pasar.',
    intro:
      'Grabamos la escena con nuestro equipo de stunts y la montamos. Con fotos de las localizaciones, o de un espacio parecido, la IA la sitúa en ese entorno para que se parezca más al rodaje real. Dirección, departamentos y stunts la ven antes de llegar al set.',
    secciones: [
      {
        titulo: 'Qué recibes',
        puntos: [
          'La escena grabada y montada.',
          'Una referencia clara para dirección, fotografía y cada departamento.',
          'Planos y tiempos para calcular si la escena necesita cuatro horas o un día entero.',
        ],
      },
      {
        titulo: 'Por qué ajusta el presupuesto',
        texto:
          'Porque todo el mundo llega al set sabiendo qué va a pasar. Cada departamento ve lo que le toca y el equipo sabe cómo y por dónde rodar cada toma. Menos improvisación, menos tiempo perdido y un presupuesto más ajustado.',
      },
    ],
    videos: ['awareness-previsualizacion-vs-final', 'previsualizaciones-compilacion'],
    ia: 'La previsualización puede incluir planos híbridos para que veas cómo quedarían antes de decidir cómo rodarlos.',
    borrador: true,
  },
  {
    slug: 'entrenamiento',
    tramo: '02',
    titulo: 'Entrenamiento con actores y actrices',
    subtitulo: 'Valoramos las aptitudes de cada actor o actriz.',
    corto: 'Entrenamiento',
    resumen: 'Preparamos a actores y actrices para que rueden su acción con seguridad y verdad en cámara.',
    intro:
      'Antes del rodaje entrenamos con los actores la acción diseñada y la ajustamos a cada uno. Llegan al set sabiendo qué tienen que hacer y cómo hacerlo con seguridad.',
    secciones: [
      {
        titulo: 'Qué trabajamos',
        puntos: [
          'La coreografía de cada escena, paso a paso.',
          'Adaptar la escena a las aptitudes del actor o actriz.',
          'Qué hace el actor y qué hace su doble.',
        ],
      },
      {
        titulo: 'Por qué importa',
        texto:
          'Una coreografía también cuenta una historia. Igual que el actor estudia y entiende el texto, tiene que estudiar el movimiento. Por eso buscamos el que mejor se adapta a sus aptitudes. Un actor que conoce la escena rueda más rápido y con menos riesgo. Y cuanta más acción hace él mismo, más libertad tiene la cámara.',
      },
    ],
    videos: ['entrenamiento-actores'],
    ia: 'Si hay planos que el actor no debe hacer por seguridad, valoramos contigo si se resuelven con su doble o en híbrido con IA.',
    borrador: true,
  },
  {
    slug: 'rodaje',
    tramo: '03',
    titulo: 'Rodaje',
    resumen: 'Stunts en el set y, si quieres, rodaje híbrido con IA. Lo eliges escena a escena.',
    intro:
      'Coordinamos y ejecutamos la acción en el set con nuestro equipo de stunts. Para cada escena eliges cómo rodarla: clásico o híbrido.',
    secciones: [
      {
        titulo: 'Rodaje clásico',
        texto: 'Todo se graba en cámara, como siempre.',
      },
      {
        titulo: 'Rodaje híbrido con IA',
        texto:
          'Mantiene ese rodaje y usa la IA solo donde reduce riesgo o tiempo. Por ejemplo, un atropello más o menos violento sin que el stunt tenga que darlo todo, o un tiroteo en un espacio cerrado sin fogueo real.',
      },
    ],
    ia: 'Cuál conviene lo decide la escena. El coste lo vemos juntos en una llamada.',
    borrador: true,
  },
  {
    slug: 'montaje',
    tramo: '04',
    titulo: 'Montaje',
    resumen: 'Asistencia de montaje en escenas de acción, también en producciones que ya están rodadas.',
    intro:
      'Entramos en el montaje cuando la escena es de acción, aunque no hayamos estado en el rodaje. No sustituimos a nadie: ayudamos a que la escena funcione mejor.',
    secciones: [
      {
        titulo: 'Cómo trabajamos',
        puntos: [
          'Trabajamos con proxies del material.',
          'Entregamos una guía de montaje para tu montador, o lo asistimos en la sala.',
          'Ajustamos ritmo, cortes y nivel de explicitud al tono de la película.',
        ],
      },
      {
        titulo: 'Qué necesitamos',
        texto:
          'Antes de recibir nada firmamos un acuerdo de confidencialidad. Después, una copia del material de la escena. Borramos todo al terminar el proyecto.',
      },
    ],
    ia: 'Si a la escena le falta un plano o necesita cambios, podemos completarla con un reshoot a partir del material rodado.',
    borrador: true,
  },
  {
    slug: 'reshoots',
    tramo: '04',
    titulo: 'Reshoots',
    resumen: 'Reshoots con IA a partir del material ya rodado, manteniendo personaje, iluminación y set.',
    intro:
      'Cuando una escena de acción necesita cambios después del rodaje, partimos siempre del material rodado. No generamos una escena de la nada.',
    secciones: [
      {
        titulo: 'Cómo trabajamos',
        puntos: [
          'Partimos del material rodado de la escena.',
          'Mantenemos la consistencia de personaje, iluminación y set.',
          'Si tienes datos de cámara, óptica e iluminación, nos ayudan a igualar el resultado.',
        ],
      },
      {
        titulo: 'Derechos de imagen',
        texto:
          'Antes de trabajar con la imagen de un artista, la productora nos confirma por escrito que tiene su autorización firmada. Sin ella, no generamos su rostro: estudiamos contigo otras soluciones de efectos digitales.',
      },
    ],
    ia: 'Es el tramo donde la IA tiene más peso, siempre sobre material real y con las autorizaciones en regla.',
    borrador: true,
  },
];

export const getServicio = (slug: string) => servicios.find((s) => s.slug === slug);
