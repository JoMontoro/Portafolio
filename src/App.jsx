import MatrixBackground from './components/MatrixBackground'
import Header          from './components/Header'
import Hero            from './components/Hero'
import Sobre           from './components/Sobre'
import Proyectos       from './components/Proyectos'
import Habilidades     from './components/Habilidades'
import Contacto        from './components/Contacto'
import Footer          from './components/Footer'
import ScrollToTop     from './components/ScrollToTop'

export default function App() {
  return (
    <>
      {/* Fondo matrix animado */}
      <MatrixBackground />

      {/* Botón volver arriba */}
      <ScrollToTop />

      {/* Header sticky */}
      <Header />

      <main>
        <Hero />
        <Sobre />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </main>

      <Footer />
    </>
  )
}
