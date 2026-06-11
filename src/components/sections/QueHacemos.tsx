import { siteContent } from '@/content/site'
import type { ServiceCard } from '@/types/content'

// SVGs inline de objetos conceptualmente ligados al cuidado — sin librería externa
function ServiceIcon({ icon }: { icon: ServiceCard['icon'] }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-8 w-8',
    'aria-hidden': true,
  }

  if (icon === 'building') {
    return (
      <svg {...props} role="img" aria-label="Edificio de consulta">
        <path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-5h4v5M10 13h.01M14 13h.01M12 10h.01" />
      </svg>
    )
  }
  if (icon === 'home') {
    return (
      <svg {...props} role="img" aria-label="Domicilio">
        <path d="M10.5 21V13.5h3V21M3 10.5 12 3l9 7.5V21H15v-7.5H9V21H3V10.5Z" />
      </svg>
    )
  }
  // users
  return (
    <svg {...props} role="img" aria-label="Familia">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function QueHacemos() {
  const { queHacemos } = siteContent

  return (
    <section
      id="que-hacemos"
      className="scroll-mt-16 py-14 md:py-20"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2
          className="mb-12 font-serif text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-text)' }}
        >
          {queHacemos.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {queHacemos.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border p-7"
              style={{
                backgroundColor: 'var(--color-bg)',
                borderColor: 'var(--color-accent-lt)',
              }}
            >
              <div className="mb-4" style={{ color: 'var(--color-accent)' }}>
                <ServiceIcon icon={card.icon} />
              </div>
              <h3
                className="mb-3 font-serif text-xl font-bold"
                style={{ color: 'var(--color-text)' }}
              >
                {card.title}
              </h3>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
