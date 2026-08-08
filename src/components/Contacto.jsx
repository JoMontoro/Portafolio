import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Inicializar EmailJS (reemplaza con tu Public Key de EmailJS)
emailjs.init('QY0DvsyS7OgM1j3Qz')

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
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
    setLoading(true)
    setError(false)

    // Enviar con EmailJS
    // Reemplaza: service_id, template_id y to_email con tus valores
    emailjs.send(
      'service_kfazoxl',  // Tu Service ID
      'template_n0i7czv', // Tu Template ID
      {
        to_email: 'jmg050299@gmail.com', // Tu email destino
        from_name: form.nombre,
        from_email: form.email,
        message: form.mensaje,
      }
    ).then(
      () => {
        setSent(true)
        setForm({ nombre: '', email: '', mensaje: '' })
        setTimeout(() => setSent(false), 3000)
        setLoading(false)
      },
      (error) => {
        console.error('Error:', error)
        setError(true)
        setLoading(false)
        setTimeout(() => setError(false), 3000)
      }
    )
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
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <div className="form-submit">
            <button type="submit" className="btn-contact" disabled={loading}>
              {loading ? '⏳ Enviando...' : sent ? '✓ ¡Enviado!' : error ? '✗ Error' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
