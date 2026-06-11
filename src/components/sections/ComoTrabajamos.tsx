import { siteContent } from '@/content/site'

export function ComoTrabajamos() {
  const { comoTrabajamos } = siteContent

  return (
    <section
      id="como-trabajamos"
      className="scroll-mt-16 py-14 md:py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2
          className="mb-12 font-serif text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-text)' }}
        >
          {comoTrabajamos.heading}
        </h2>

        <ol className="space-y-10">
          {comoTrabajamos.steps.map((step, i) => (
            <li key={step.title} className="flex gap-6">
              {/* Número grande */}
              <span
                className="shrink-0 font-serif text-5xl font-bold leading-none"
                style={{ color: 'var(--color-accent-lt)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="pt-1">
                <h3
                  className="mb-2 font-serif text-xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
