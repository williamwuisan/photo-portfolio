import { useState } from 'react'
import LocationCarousel from '../components/LocationCarousel'
import LocationList from '../components/LocationList'
import './Home.css'

function runViewTransition(update) {
  if (document.startViewTransition) {
    const transition = document.startViewTransition(update)
    transition.finished.catch(() => {})
  } else {
    update()
  }
}

function Home({ introReady = true }) {
  const [focusedIndex, setFocusedIndex] = useState(null)

  const openLocation = (index) => {
    runViewTransition(() => setFocusedIndex(index))
  }

  const closeLocation = () => {
    runViewTransition(() => setFocusedIndex(null))
  }

  return (
    <section className="home">
      <aside className="sidebar-text">
        <span>WicilTravel · 2026</span>
      </aside>

      <div className="home-inner">
        {focusedIndex === null ? (
          <LocationList onSelect={openLocation} enabled={introReady} />
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
