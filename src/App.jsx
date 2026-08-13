import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import IntroOverlay from './components/IntroOverlay'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LocationGallery from './pages/LocationGallery'

function App() {
  const [introDone, setIntroDone] = useState(false)
  const [homeKey, setHomeKey] = useState(0)

  return (
    <>
      {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      <span className="edge-bar edge-bar-top" aria-hidden="true" />
      <span className="edge-bar edge-bar-bottom" aria-hidden="true" />
      <Navbar onBrandClick={() => setHomeKey((k) => k + 1)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home key={homeKey} introReady={introDone} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location/:slug" element={<LocationGallery />} />
        </Routes>
      </main>
    </>
  )
}

export default App
