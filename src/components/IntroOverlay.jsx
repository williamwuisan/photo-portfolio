import { useEffect, useState } from 'react'
import Logo from './Logo'
import './IntroOverlay.css'

function IntroOverlay({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = setTimeout(() => setLeaving(true), 2100)
    const doneTimer = setTimeout(() => onDone(), 2750)
    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`intro-overlay${leaving ? ' is-leaving' : ''}`}>
      <Logo size="large" animated className="intro-logo" />
    </div>
  )
}

export default IntroOverlay
