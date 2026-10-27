/**
 * Datos estructurados (schema.org) para buscadores e IAs.
 * KERAMBIT es una empresa de servicios sin sede abierta al público: se indica la zona de trabajo, no una dirección.
 */
import { site } from '../config/site';
import { equipo } from './equipo';
import type { Servicio } from './servicios';

const abs = (path: string, base: URL | undefined) => new URL(path, base).href;
export const orgId = (base: URL | undefined) => abs('/#organizacion', base);

const areaServed = [
  { '@type': 'Country', name: 'España' },
  { '@type': 'Country', name: 'Estados Unidos' },
  { '@type': 'Place', name: 'Internacional' },
];

export const organizationJsonLd = (base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId(base),
  name: site.name,
  alternateName: 'KERAMBIT Action Design',
  url: abs('/', base),
  logo: abs('/logo.png', base),
  description:
    'Equipo de stunts y diseño de acción para cine con más de 20 años de experiencia. Diseño de acción desde guion, previsualización, entrenamiento con actores, rodaje, montaje y reshoots, con opción de rodaje híbrido con IA.',
  email: site.contact.email,
  telephone: site.contact.phoneDisplay.replace(/\s/g, ''),
  areaServed,
  knowsAbout: [
    'Stunts',
    'Diseño de acción',
    'Coordinación de stunts',
    'Previsualización de escenas de acción',
    'Entrenamiento de actores para escenas de acción',
    'Montaje de escenas de acción',
    'Reshoots',
    'Rodaje híbrido con IA',
  ],
  employee: equipo.map((m) => ({
    '@type': 'Person',
    name: m.nombre,
    jobTitle: m.roles.join(', '),
    ...(m.imdb ? { sameAs: [m.imdb] } : {}),
  })),
});

export const websiteJsonLd = (base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: abs('/', base),
  inLanguage: 'es',
  publisher: { '@id': orgId(base) },
});

export const serviceJsonLd = (s: Servicio, base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.titulo,
  serviceType: s.titulo,
  description: `${s.resumen} ${s.intro}`,
  url: abs(`/servicios/${s.slug}/`, base),
  provider: { '@id': orgId(base) },
  areaServed,
  inLanguage: 'es',
});
