import { siteContent } from '@/content/site'

export function Equipo() {
  const { equipo } = siteContent

  return (
    <section
      id="equipo"
      className="scroll-mt-16 py-14 md:py-20"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2
          className="mb-6 font-serif text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-text)' }}
        >
          {equipo.heading}
        </h2>

        <p
          className="mb-12 max-w-2xl font-body text-lg leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {equipo.intro}
        </p>

        {/* TODO: Reemplazar con datos reales del equipo */}
        <div className="grid gap-6 sm:grid-cols-2">
          {equipo.members.map((member, i) => (
            <article
              key={i}
              className="flex gap-5 rounded-xl border p-6"
              style={{
                backgroundColor: 'var(--color-bg)',
                borderColor: 'var(--color-accent-lt)',
              }}
            >
              {/* Avatar con iniciales */}
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-lg font-bold"
                style={{
                  backgroundColor: 'var(--color-accent-lt)',
                  color: 'var(--color-white)',
                }}
                aria-hidden="true"
              >
                {member.initials}
              </div>

              <div>
                <p
                  className="font-serif text-lg font-bold leading-tight"
                  style={{ color: 'var(--color-text)' }}
                >
                  {member.name}
                </p>
                <p
                  className="mb-2 font-body text-sm font-semibold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {member.role}
                </p>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
