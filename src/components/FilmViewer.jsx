import { useEffect, useRef, useState } from 'react'
import './FilmViewer.css'

function FilmViewer({ photos }) {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const stripRef = useRef(null)

  const goTo = (index) => {
    setDir(index > active ? 1 : -1)
    setActive(index)
  }

  const goNext = () => goTo((active + 1) % photos.length)
  const goPrev = () => goTo((active - 1 + photos.length) % photos.length)

  useEffect(() => {
    const strip = stripRef.current
    const thumb = strip?.querySelector('.filmstrip-thumb.is-active')
    thumb?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [active])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const current = photos[active]

  return (
    <div className="film-viewer">
      <div className="film-main">
        <button
          type="button"
          className="film-nav film-nav-prev"
          onClick={goPrev}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <div
          className="film-frame"
          key={current.id}
          style={{ '--advance-dir': dir === 1 ? '28px' : '-28px' }}
        >
          <span className="film-frame-label">{current.label}</span>
        </div>

        <button
          type="button"
          className="film-nav film-nav-next"
          onClick={goNext}
          aria-label="Next photo"
        >
          ›
        </button>

        <div className="film-counter">
          {active + 1} / {photos.length}
        </div>
      </div>

      <div className="filmstrip" ref={stripRef}>
        <div className="filmstrip-track">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              className={`filmstrip-thumb${i === active ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View ${photo.label}`}
            >
              {i === active && (
                <>
                  <span className="film-corner film-corner-tl" />
                  <span className="film-corner film-corner-tr" />
                  <span className="film-corner film-corner-bl" />
                  <span className="film-corner film-corner-br" />
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilmViewer
