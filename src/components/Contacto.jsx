import { useState, useRef, useEffect } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="section container fade-in" ref={sectionRef}>
      <div className="contacto-content">
        <h2 className="titulo-contacto">Contacto</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <div className="form-submit">
            <button type="submit" className="btn-contact">
              {sent ? '¡Enviado! ✓' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
