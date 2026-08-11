import { locations } from '../data/locations'
import { useReveal } from '../hooks/useReveal'
import './LocationList.css'

function LocationListItem({ location, index, onSelect }) {
  const [ref, inView] = useReveal()

  return (
    <button
      ref={ref}
      type="button"
      className={`location-item${inView ? ' is-visible' : ''}`}
      onClick={() => onSelect(index)}
      style={{ viewTransitionName: `photo-${location.slug}` }}
    >
      <span className="location-item-title">{location.title}</span>
      <span className="location-item-year">{location.year}</span>
    </button>
  )
}

function LocationList({ onSelect }) {
  return (
    <div className="gallery-column">
      {locations.map((location, index) => (
        <LocationListItem
          key={location.slug}
          location={location}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default LocationList
