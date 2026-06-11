// Esquema de contenido — Sinapsis60
// Si se integra un CMS en el futuro, este archivo define el contrato del adaptador.

export interface SiteMetadata {
  title: string
  description: string
  url: string
  locale: string
  businessName: string
  /** Número de WhatsApp con código de país, sin espacios. Ej: 56912345678 */
  whatsappNumber: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    region: string
    country: string
  }
  coordinates: { lat: number; lng: number }
  openGraph: { title: string; description: string }
}

export interface NavItem {
  label: string
  href: string
}

export interface HeroContent {
  headline: string
  subheadline: string
  ctaLabel: string
}

export interface ServiceCard {
  /** 'building' | 'home' | 'users' — resuelto a SVG inline en el componente */
  icon: 'building' | 'home' | 'users'
  title: string
  description: string
}

export interface QueHacemosContent {
  heading: string
  cards: ServiceCard[]
}

export interface WorkStep {
  title: string
  description: string
}

export interface ComoTrabajamosContent {
  heading: string
  steps: WorkStep[]
}

export interface TeamMember {
  initials: string
  name: string
  role: string
  description: string
}

export interface EquipoContent {
  heading: string
  intro: string
  members: TeamMember[]
}

export interface ContactoContent {
  heading: string
  subheading: string
  supportText: string
}

export interface SiteContent {
  metadata: SiteMetadata
  nav: NavItem[]
  hero: HeroContent
  queHacemos: QueHacemosContent
  comoTrabajamos: ComoTrabajamosContent
  equipo: EquipoContent
  contacto: ContactoContent
}
