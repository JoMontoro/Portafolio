import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const letters = 'アァカサタナハマヤャラワガザダバパABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const fontSize = 16
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff88'
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      resize()
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas id="matrixCanvas" ref={canvasRef} />
}
