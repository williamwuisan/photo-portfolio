import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { locations } from '../data/locations'
import './LocationCarousel.css'

function LocationCarousel({ initialIndex = 0, onClose }) {
  const [active, setActive] = useState(initialIndex)
  const [dir, setDir] = useState(1)
  const count = locations.length

  const go = (d) => {
    setDir(d)
    setActive((prev) => (prev + d + count) % count)
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const prevIndex = (active - 1 + count) % count
  const nextIndex = (active + 1) % count
  const current = locations[active]
  const prev = locations[prevIndex]
  const next = locations[nextIndex]

  return (
    <div className="carousel-wrap">
      <div className="carousel-row">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => go(-1)}
          aria-label="Previous location"
        >
          ‹
        </button>

        <div className="carousel-track">
          <button
            type="button"
            className="carousel-card peek peek-left"
            onClick={() => go(-1)}
            aria-label={`Go to ${prev.title}`}
          >
            {prev.thumbnail ? (
              <img src={prev.thumbnail} alt="" className="carousel-card-img" />
            ) : (
              <span>{prev.title}</span>
            )}
          </button>

          <div
            className={`carousel-card active slide-${dir === 1 ? 'right' : 'left'}`}
            key={current.slug}
            style={{ viewTransitionName: `photo-${current.slug}` }}
          >
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            {current.thumbnail ? (
              <img
                src={current.thumbnail}
                alt=""
                className="carousel-card-img"
              />
            ) : (
              <span className="placeholder-label">{current.title} cover</span>
            )}
            <div className="carousel-title-plaque">
              <h2 className="carousel-title">{current.title}</h2>
            </div>
          </div>

          <button
            type="button"
            className="carousel-card peek peek-right"
            onClick={() => go(1)}
            aria-label={`Go to ${next.title}`}
          >
            {next.thumbnail ? (
              <img src={next.thumbnail} alt="" className="carousel-card-img" />
            ) : (
              <span>{next.title}</span>
            )}
          </button>
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={() => go(1)}
          aria-label="Next location"
        >
          ›
        </button>
      </div>

      <div className="carousel-actions">
        <button
          type="button"
          className="carousel-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <Link to={`/location/${current.slug}`} className="explore-btn">
          Explore
        </Link>
      </div>
    </div>
  )
}

export default LocationCarousel
