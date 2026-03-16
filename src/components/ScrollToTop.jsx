import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`btn-top${visible ? ' visible' : ''}`}
      onClick={goTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}
