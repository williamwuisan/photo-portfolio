import { Link, useParams } from 'react-router-dom'
import { locations } from '../data/locations'
import FilmViewer from '../components/FilmViewer'
import './LocationGallery.css'

function LocationGallery() {
  const { slug } = useParams()
  const location = locations.find((item) => item.slug === slug)

  if (!location) {
    return (
      <section className="location-gallery">
        <Link to="/" className="back-link">
          ← Back
        </Link>
        <p>Location not found.</p>
      </section>
    )
  }

  const photos = Array.from({ length: location.photoCount }, (_, i) => ({
    id: i + 1,
    label: `${location.title} — Photo ${i + 1}`,
  }))

  return (
    <section className="location-gallery">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <div className="location-header">
        <h1>{location.title}</h1>
        <span>{location.year}</span>
      </div>

      <FilmViewer photos={photos} />
    </section>
  )
}

export default LocationGallery
