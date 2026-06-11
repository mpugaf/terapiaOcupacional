import Image from 'next/image'
import { siteContent } from '@/content/site'

export function Hero() {
  const { hero, metadata } = siteContent
  const waHref = `https://wa.me/${metadata.whatsappNumber}`

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-content scroll-mt-16 items-center gap-12 px-5 py-14 sm:px-6 md:grid-cols-2 md:py-20"
    >
      {/* Texto — izquierda en desktop */}
      <div>
        <h1
          className="mb-5 font-serif text-4xl font-bold leading-tight md:text-5xl"
          style={{ color: 'var(--color-text)' }}
        >
          {hero.headline}
        </h1>
        <p
          className="mb-8 font-body text-lg leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {hero.subheadline}
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center rounded-lg px-7 py-3 font-body text-base font-semibold transition-opacity duration-150 hover:opacity-90"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-white)' }}
        >
          {hero.ctaLabel}
        </a>
      </div>

      {/* Imagen — derecha en desktop, arriba en mobile */}
      <div className="relative order-first h-64 overflow-hidden rounded-2xl md:order-last md:h-80">
        <Image
          src="https://res.cloudinary.com/dmbkdrlcj/image/upload/v1781152858/sinapsis1_n3hdfq.png"
          alt="Equipo Sinapsis60"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
