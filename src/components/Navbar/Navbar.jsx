import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {

  return (
    
    <div className="Navbar">
      <div className="grid grid-cols-12 mx-12">
        <div className="nav-logo flex col-span-3">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="nav-links flex col-span-7">
          <Link to="/" className="">Home</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/projects" className="">Projects</Link>
          {/* Add more links for other pages */}
        </div>
        <div className="nav-contact col-span-2">

        </div>
      </div>
    </div>

  )
}

export default Navbar
