import './Hero.css'

const heroImage = `${import.meta.env.BASE_URL}hero/home.jpg`

function Hero({ onExplore }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Travel</h1>
        <p className="hero-subtitle">
          Photography from journeys around the world. Explore destinations,
          one frame at a time.
        </p>
        <button type="button" className="hero-btn" onClick={onExplore}>
          Explore
          <span className="hero-btn-icon">↓</span>
        </button>
      </div>
    </section>
  )
}

export default Hero
