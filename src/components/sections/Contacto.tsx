'use client'

import { type FormEvent, useState } from 'react'
import { siteContent } from '@/content/site'

export function Contacto() {
  const { contacto, metadata } = siteContent
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hola, soy ${nombre}. Mi WhatsApp es ${telefono}.`
    )
    window.open(`https://wa.me/${metadata.whatsappNumber}?text=${msg}`, '_blank')
  }

  const inputBase =
    'w-full border-b border-[--color-accent-lt] bg-transparent py-3 font-body text-base outline-none transition-colors duration-150 focus:border-[--color-accent]'

  return (
    <section
      id="contacto"
      className="scroll-mt-16 py-14 md:py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <h2
          className="mb-3 font-serif text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-text)' }}
        >
          {contacto.heading}
        </h2>
        <p
          className="mb-10 font-body text-lg"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {contacto.subheading}
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md space-y-8"
          noValidate
          aria-label="Formulario de contacto"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block font-body text-sm font-semibold"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Nombre completo
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className={inputBase}
              style={{ color: 'var(--color-text)' }}
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block font-body text-sm font-semibold"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Número de WhatsApp
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              autoComplete="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+56 9 XXXX XXXX"
              className={inputBase}
              style={{ color: 'var(--color-text)' }}
            />
          </div>

          <button
            type="submit"
            className="min-h-[48px] rounded-lg px-8 py-3 font-body text-base font-semibold transition-opacity duration-150 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-white)' }}
          >
            Enviar por WhatsApp
          </button>
        </form>

        <p
          className="mt-8 max-w-md font-body text-sm leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {contacto.supportText}
        </p>
      </div>
    </section>
  )
}
