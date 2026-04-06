import { useRef, useEffect } from 'react'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'

const projects = [
  { img: pro1, alt: 'Proyecto 1', href: 'https://interfaz-sangria.vercel.app/' },
  { img: pro2, alt: 'Proyecto 2', href: 'https://frontcalculos.vercel.app/'   },
  
]

export default function Proyectos() {
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
    <section id="proyectos" className="section container fade-in" ref={sectionRef}>
      <h2>Proyectos</h2>
      <div className="projects-grid gap: 50px">
        {projects.map(({ img, alt, href }, i) => (
          <div className="project-card" key={i}>
            <img src={img} alt={alt} />
            {href && <a href={href} target="_blank" rel="noreferrer">{alt}</a>}
          </div>
        ))}
      </div>
    </section>
  )
}
