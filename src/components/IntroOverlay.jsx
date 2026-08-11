import { useEffect, useState } from 'react'
import Logo from './Logo'
import './IntroOverlay.css'

function IntroOverlay({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 1200)
    const doneTimer = setTimeout(() => onDone(), 1850)
    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`intro-overlay${leaving ? ' is-leaving' : ''}`}>
      <Logo size="large" className="intro-logo" />
    </div>
  )
}

export default IntroOverlay
