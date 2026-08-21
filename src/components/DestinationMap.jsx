import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './DestinationMap.css'

const mapImage = `${import.meta.env.BASE_URL}world-map.svg`

function project(lat, lon) {
  return {
    left: `${((lon + 180) / 360) * 100}%`,
    top: `${((90 - lat) / 180) * 100}%`,
  }
}

function DestinationMap() {
  return (
    <section className="destination-map">
      <div className="destination-map-intro">
        <span className="destination-map-eyebrow">Destinations</span>
        <h2 className="destination-map-heading">Explore by Destination</h2>
        <p className="destination-map-subtitle">
          {destinations.length} destinations, 206 photographs, and counting —
          spanning Southeast Asia to the heart of Europe.
        </p>
      </div>

      <div className="destination-map-canvas">
        <div className="destination-map-cover">
          <div className="destination-map-zoom">
            <img src={mapImage} alt="" className="destination-map-img" />
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/location/${dest.slug}`}
                className="destination-dot"
                style={project(dest.lat, dest.lon)}
              >
                <span className="destination-dot-ping" />
                <span className="destination-dot-core" />
                <span className="destination-dot-label">{dest.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <span className="destination-map-fade-top" aria-hidden="true" />
        <span className="destination-map-fade" aria-hidden="true" />
      </div>
    </section>
  )
}

export default DestinationMap
