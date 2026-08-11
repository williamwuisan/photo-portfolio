import { useReveal } from '../hooks/useReveal'
import './RevealImage.css'

function RevealImage({ label }) {
  const [ref, inView] = useReveal()

  return (
    <div ref={ref} className={`reveal-item${inView ? ' is-visible' : ''}`}>
      <span>{label}</span>
    </div>
  )
}

export default RevealImage
