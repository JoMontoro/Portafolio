import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#sobre',      label: 'Sobre mí'    },
  { href: '#proyectos',  label: 'Proyectos'   },
  { href: '#habilidades',label: 'Habilidades' },
  { href: '#contacto',   label: 'Contacto'    },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const headerEl = document.querySelector('.header')
    const offset = (headerEl?.offsetHeight ?? 70) + 10
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-content">
        <a href="/" className="logo">
          <span>JOSE MONTORO</span>
        </a>
        <nav className="nav">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
