import { useState } from 'react'
import LocationCarousel from '../components/LocationCarousel'
import LocationList from '../components/LocationList'
import './Home.css'

function Home() {
  const [focusedIndex, setFocusedIndex] = useState(null)

  const openLocation = (index) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setFocusedIndex(index))
    } else {
      setFocusedIndex(index)
    }
  }

  const closeLocation = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setFocusedIndex(null))
    } else {
      setFocusedIndex(null)
    }
  }

  return (
    <section className="home">
      <aside className="sidebar-text">
        <span>Photo Portfolio · 2026</span>
      </aside>

      <div className="home-inner">
        <div className="hero-copy">
          <h1>Selected Work</h1>
          <p>
            {focusedIndex === null
              ? 'Click a location to explore.'
              : 'Use the arrows, or click a side card to browse.'}
          </p>
        </div>

        {focusedIndex === null ? (
          <LocationList onSelect={openLocation} />
        ) : (
          <LocationCarousel
            initialIndex={focusedIndex}
            onClose={closeLocation}
          />
        )}
      </div>
    </section>
  )
}

export default Home
