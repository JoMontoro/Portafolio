export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#proyectos')
    if (!target) return
    const header = document.querySelector('.header')
    const offset = (header?.offsetHeight ?? 70) + 10
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    })
  }

  return (
    <section className="hero container">
      <h1>
        Frontend / Full Stack <span className="hero-highlight">Developer</span>
      </h1>
      <p>
        Desarrollador especializado en <strong>Desarrollo Web</strong>, arquitectura web y seguridad.
      </p>
      <a href="#proyectos" className="btn" onClick={handleClick}>
        Ver Proyectos
      </a>
    </section>
  )
}
