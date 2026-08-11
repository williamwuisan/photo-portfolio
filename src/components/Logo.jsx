import './Logo.css'

const BLADE_ANGLES = [0, 60, 120, 180, 240, 300]

function Logo({ size = 'small', className = '', animated = false }) {
  return (
    <span className={`logo logo-${size}${animated ? ' logo-build' : ''} ${className}`}>
      <svg viewBox="0 0 48 48" className="logo-mark" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="logo-ring"
          style={animated ? { animationDelay: '0s' } : undefined}
        />
        {BLADE_ANGLES.map((angle, i) => (
          <polygon
            key={angle}
            points="24,24 24,7 35,13"
            className="logo-blade"
            fill="currentColor"
            stroke="var(--bg)"
            strokeWidth="0.75"
            style={{
              '--angle': `${angle}deg`,
              animationDelay: animated ? `${0.25 + i * 0.09}s` : undefined,
            }}
          />
        ))}
      </svg>
      <span className="logo-word">
        <span
          className="logo-word-inner"
          style={animated ? { animationDelay: '1.05s' } : undefined}
        >
          Wicil<em>Photo</em>
        </span>
      </span>
    </span>
  )
}

export default Logo
