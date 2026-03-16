import { useRef, useEffect } from 'react'
import foto from '../assets/foto.png'

export default function Sobre() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="section container fade-in" ref={sectionRef}>
      <h2 className="titulo-sobre">Sobre mí</h2>
      <div className="sobre-content">

        {/* Foto de perfil dentro de la sección */}
        <div className="sobre-img-wrap">
          <img src={foto} alt="Jose Montoro" className="sobre-foto" />
        </div>

        {/* Flip card con animación 3D */}
        <div className="card-flip-container">
          <div className="card-flip">
            <div className="card-front">
              <h3>¿Quién soy?</h3>
              <p>Haz hover para conocerme →</p>
            </div>
            <div className="card-back">
              <p>
                Soy desarrollador web enfocado en la creación de aplicaciones modernas,
                seguras y escalables. Trabajo principalmente con Angular y tecnologías
                backend como Java y Spring Boot, desarrollando sistemas administrativos
                y soluciones basadas en inteligencia artificial. Me apasiona la arquitectura
                limpia, la optimización de bases de datos y aplicar buenas prácticas de
                seguridad en cada proyecto.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
