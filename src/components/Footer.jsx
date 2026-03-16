const navLinks = [
  { href: '#sobre',       label: 'Sobre mí'    },
  { href: '#proyectos',   label: 'Proyectos'   },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto',    label: 'Contacto'    },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-col">
          <h3>Jose Montoro</h3>
          <p>Full Stack Developer</p>
          <p>Framework · Java · Spring Boot</p>
        </div>

        <div className="footer-col">
          <h3>Navegación</h3>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <p>📍Lima - Perú</p>
          <div className="footer-socials">
            <a href="https://github.com/JoMontoro" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/jose-antonio-montoro-garcia-39b81a238" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jose Montoro · Diseñado y desarrollado por José Montoro</p>
      </div>
    </footer>
  )
}
