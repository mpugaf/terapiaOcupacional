import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { QueHacemos } from '@/components/sections/QueHacemos'
import { ComoTrabajamos } from '@/components/sections/ComoTrabajamos'
import { Equipo } from '@/components/sections/Equipo'
import { Contacto } from '@/components/sections/Contacto'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <QueHacemos />
        <ComoTrabajamos />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
