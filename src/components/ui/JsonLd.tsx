import { siteContent } from '@/content/site'

export function JsonLd() {
  const { metadata } = siteContent

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: metadata.businessName,
    description: metadata.description,
    url: metadata.url,
    telephone: metadata.phone,
    email: metadata.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: metadata.address.street,
      addressLocality: metadata.address.city,
      addressRegion: metadata.address.region,
      addressCountry: metadata.address.country,
    },
    areaServed: 'Santiago, Chile',
    serviceType: 'Atención domiciliaria y en consulta para personas mayores',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
