import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import LocationCarousel from '../components/LocationCarousel'
import LocationList from '../components/LocationList'
import { locations } from '../data/locations'
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
  const { state } = useLocation()
  const reopenIndex = state?.reopenSlug
    ? locations.findIndex((item) => item.slug === state.reopenSlug)
    : -1

  const [focusedIndex, setFocusedIndex] = useState(
    reopenIndex >= 0 ? reopenIndex : null,
  )
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
    if (reopenIndex >= 0) {
      galleryRef.current?.scrollIntoView({ behavior: 'auto' })
    } else {
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="home">
      <Hero onExplore={scrollToGallery} />

      <section className="home-gallery" ref={galleryRef}>
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
