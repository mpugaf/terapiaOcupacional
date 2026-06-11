import { siteContent } from '@/content/site'

export function Footer() {
  const { metadata } = siteContent
  const year = new Date().getFullYear()
  const waHref = `https://wa.me/${metadata.whatsappNumber}`

  return (
    <footer style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-white)' }}>
      <div className="mx-auto flex max-w-content flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-body text-sm opacity-90">
          © {year} {metadata.businessName}. Todos los derechos reservados.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm underline underline-offset-2 opacity-90 hover:opacity-100"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
