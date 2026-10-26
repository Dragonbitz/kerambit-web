/**
 * Citas de crítica sobre la acción de las películas.
 * Siempre literales, con su fuente y enlace. Si la cita está en otro idioma, se añade traducción.
 * Comprobadas en el artículo original (oct. 2026).
 */
export interface Critica {
  cita: string;
  traduccion?: string;
  medio: string;
  autor: string;
  pelicula: string;
  url: string;
}

export const criticas: Critica[] = [
  {
    cita: 'The fights are also incredibly well designed in their creative approach with many great scenes to boast in their portfolio of how to get action right.',
    traduccion:
      'Las peleas están increíblemente bien diseñadas en su enfoque creativo, con muchas grandes escenas que son un ejemplo de cómo hacer bien la acción.',
    medio: 'But Why Tho?',
    autor: 'Aaron Phillips',
    pelicula: 'Xtremo',
    url: 'https://butwhytho.net/2021/06/05/review-xtreme-lives-up-to-its-name/',
  },
  {
    cita: 'Lo mejor: sus secuencias violentas y las coreografías de sus combates.',
    medio: 'eCartelera',
    autor: 'Alberto Cano Rodríguez',
    pelicula: 'Xtremo',
    url: 'https://www.ecartelera.com/noticias/critica-xtremo-netflix-65197/',
  },
  {
    cita: '…the action scenes are extremely impressive.',
    traduccion: '…las escenas de acción son tremendamente impresionantes.',
    medio: 'Heaven of Horror',
    autor: 'Karina Adelgaard',
    pelicula: 'Xtremo',
    url: 'https://www.heavenofhorror.com/reviews/xtreme-netflix-thriller-xtremo/',
  },
];
