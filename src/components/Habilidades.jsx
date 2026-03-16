import { useEffect, useRef } from 'react'

// Importa tus imágenes desde assets
import angular    from '../assets/angular.png'
import github     from '../assets/github.png'
import html       from '../assets/HTML.png'
import css        from '../assets/CSS.png'
import js         from '../assets/js.png'
import nodejs     from '../assets/nodo js.png'
import springboot from '../assets/spring-boot.svg'

const skills = [
  { img: angular,    label: 'Angular'      },
  { img: github,     label: 'GitHub'       },
  { img: html,       label: 'HTML5'        },
  { img: css,        label: 'CSS3'         },
  { img: js,         label: 'JavaScript'   },
  { img: nodejs,     label: 'Node.js'      },
  { img: springboot, label: 'Spring Boot'  },
]

export default function Habilidades() {
  const trackRef = useRef(null)
  const posRef   = useRef(0)
  const animRef  = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    const speed = 0.6

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed
        track.style.transform = `translateX(-${posRef.current}px)`

        const first = track.firstElementChild
        if (first) {
          const firstWidth = first.offsetWidth + 40 // 40 = gap
          if (posRef.current >= firstWidth) {
            track.appendChild(first)
            posRef.current -= firstWidth
            track.style.transform = `translateX(-${posRef.current}px)`
          }
        }
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    const pause  = () => { pausedRef.current = true  }
    const resume = () => { pausedRef.current = false }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animRef.current)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section id="habilidades" className="section container">
      <h2>Habilidades</h2>
      <div className="slider">
        <div className="slider-track" ref={trackRef}>
          {skills.map(({ img, label }) => (
            <div className="skill" key={label}>
              <img src={img} alt={label} />
              <span className="skill-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
