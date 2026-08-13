import { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
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
  const galleryRef = useRef(null)

  const openLocation = (index) => {
    runViewTransition(() => setFocusedIndex(index))
  }

  const closeLocation = () => {
    runViewTransition(() => setFocusedIndex(null))
  }

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      <Hero onExplore={scrollToGallery} />

      <section className="home-gallery" ref={galleryRef}>
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
    </div>
  )
}

export default Home
