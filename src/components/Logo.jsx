import './Logo.css'

const BLADE_ANGLES = [0, 60, 120, 180, 240, 300]

function Logo({ size = 'small', className = '' }) {
  return (
    <span className={`logo logo-${size} ${className}`}>
      <svg viewBox="0 0 48 48" className="logo-mark" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
        {BLADE_ANGLES.map((angle) => (
          <polygon
            key={angle}
            points="24,24 24,7 35,13"
            transform={`rotate(${angle} 24 24)`}
            fill="currentColor"
            stroke="var(--bg)"
            strokeWidth="0.75"
          />
        ))}
      </svg>
      <span className="logo-word">
        Wicil<em>Photo</em>
      </span>
    </span>
  )
}

export default Logo
