import { NavLink } from 'react-router-dom'
import './Navbar.css'

function FlipText({ text }) {
  return (
    <span className="flip">
      <span className="flip-inner">
        <span className="flip-line">{text}</span>
        <span className="flip-line">{text}</span>
      </span>
    </span>
  )
}

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <FlipText text="Portfolio" />
      </NavLink>
      <nav>
        <NavLink to="/" end>
          <FlipText text="Gallery" />
        </NavLink>
        <NavLink to="/about">
          <FlipText text="About" />
        </NavLink>
        <NavLink to="/contact">
          <FlipText text="Contact" />
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
