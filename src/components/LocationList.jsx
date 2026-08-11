import { locations } from '../data/locations'
import { useReveal } from '../hooks/useReveal'
import './LocationList.css'

function LocationListItem({ location, index, onSelect, enabled }) {
  const [ref, inView] = useReveal(enabled)

  return (
    <button
      ref={ref}
      type="button"
      className={`location-item${inView ? ' is-visible' : ''}`}
      onClick={() => onSelect(index)}
      aria-label={`Open ${location.title}`}
      style={{
        viewTransitionName: `photo-${location.slug}`,
        transitionDelay: `${index * 0.15}s`,
      }}
    />
  )
}

function LocationList({ onSelect, enabled = true }) {
  return (
    <div className="location-row">
      {locations.map((location, index) => (
        <LocationListItem
          key={location.slug}
          location={location}
          index={index}
          onSelect={onSelect}
          enabled={enabled}
        />
      ))}
    </div>
  )
}

export default LocationList
