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

  return (
    <>
      {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home introReady={introDone} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location/:slug" element={<LocationGallery />} />
        </Routes>
      </main>
    </>
  )
}

export default App
