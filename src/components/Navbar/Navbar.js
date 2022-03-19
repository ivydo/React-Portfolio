import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

