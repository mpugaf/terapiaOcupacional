// =============================================================================
// CAPA DE CONTENIDO — Sinapsis60
// Reemplazar los valores TODO con datos reales del cliente (Marcelo Salinas).
// =============================================================================

import type { SiteContent } from '@/types/content'

export const siteContent: SiteContent = {
  metadata: {
    title: 'Sinapsis60 — Atención en consulta y domiciliaria para personas mayores',
    description:
      'Sinapsis60 ofrece atención profesional en consulta y domiciliaria para adultos mayores en Santiago. Profesionales de salud con trato cercano y personalizado.',
    url: 'https://sinapsis.cl',
    locale: 'es-CL',
    businessName: 'Sinapsis60',
    whatsappNumber: '56972191941',
    phone: '+56 9 XXXX XXXX',     // TODO: reemplazar con número real
    email: 'contacto@sinapsis.cl', // TODO: confirmar con cliente
    address: {
      street: 'TODO: dirección del consultorio',
      city: 'Santiago',
      region: 'Región Metropolitana',
      country: 'Chile',
    },
    coordinates: {
      lat: -33.4489, // placeholder: Santiago centro
      lng: -70.6693,
    },
    openGraph: {
      title: 'Sinapsis60',
      description: 'Atención especializada para personas mayores en Santiago.',
    },
  },

  nav: [
    { label: 'Inicio',           href: '#inicio' },
    { label: 'Lo que hacemos',   href: '#que-hacemos' },
    { label: 'Cómo trabajamos',  href: '#como-trabajamos' },
    { label: 'Equipo',           href: '#equipo' },
    { label: 'Contacto',         href: '#contacto' },
  ],

  hero: {
    headline: 'Cuidado especializado para quienes más quieres',
    subheadline:
      'Atención en consulta y domiciliaria para personas mayores. Profesionales de salud, trato cercano.',
    ctaLabel: 'Escríbenos por WhatsApp',
  },

  queHacemos: {
    heading: 'Lo que hacemos',
    cards: [
      {
        icon: 'building',
        title: 'Atención en consulta',
        description:
          'Evaluación y tratamiento en nuestras instalaciones, con equipamiento especializado para adultos mayores.',
      },
      {
        icon: 'home',
        title: 'Atención domiciliaria',
        description:
          'Llevamos el cuidado hasta el hogar del paciente, con la misma calidad y dedicación profesional.',
      },
      {
        icon: 'users',
        title: 'Acompañamiento familiar',
        description:
          'Orientamos a las familias en el proceso de cuidado, con guías prácticas y apoyo continuo.',
      },
    ],
  },

  comoTrabajamos: {
    heading: 'Cómo trabajamos',
    steps: [
      {
        title: 'Primer contacto',
        description:
          'Nos escribes o llamas. En menos de 24 horas coordinamos una primera evaluación sin costo.',
      },
      {
        title: 'Evaluación inicial',
        description:
          'Un profesional evalúa las necesidades del paciente y diseña un plan personalizado.',
      },
      {
        title: 'Atención continua',
        description:
          'Iniciamos las sesiones acordadas, en consulta o en domicilio según lo que mejor se adapte.',
      },
      {
        title: 'Seguimiento',
        description:
          'Revisamos el progreso periódicamente y ajustamos el plan con la familia.',
      },
    ],
  },

  equipo: {
    heading: 'Equipo',
    intro:
      'Somos un equipo de profesionales de la salud con experiencia en atención a personas mayores. Nos une la convicción de que el cuidado digno y cercano marca la diferencia.',
    members: [
      /* TODO: Reemplazar con datos reales del equipo */
      {
        initials: 'NP',
        name: 'Nombre del profesional',
        role: 'Especialidad',
        description: 'Breve descripción del profesional y su enfoque de trabajo.',
      },
      {
        initials: 'NP',
        name: 'Nombre del profesional',
        role: 'Especialidad',
        description: 'Breve descripción del profesional y su enfoque de trabajo.',
      },
      {
        initials: 'NP',
        name: 'Nombre del profesional',
        role: 'Especialidad',
        description: 'Breve descripción del profesional y su enfoque de trabajo.',
      },
      {
        initials: 'NP',
        name: 'Nombre del profesional',
        role: 'Especialidad',
        description: 'Breve descripción del profesional y su enfoque de trabajo.',
      },
    ],
  },

  contacto: {
    heading: 'Contacto',
    subheading: '¿Tienes una consulta o quieres coordinar una evaluación?',
    supportText:
      'También puedes escribirnos directamente a nuestro WhatsApp. Respondemos en menos de 24 horas.',
  },
}
