import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {

  return (

    // NOTE: when designing mobile, make breakpoint md not sm

    <div className="Navbar">
      <div className="flex p-12 px-20 bg-black text-white">
        <Link to="/" className="nav-logo flex h-7 items-center">
          <img src="src/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="src/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <div className="nav-links flex flex-grow justify-center items-center xl:gap-20 lg:gap-14 text-base">
          <Link to="/about" className="">About</Link>
          <Link to="/projects" className="">Projects ▾</Link>
          <Link to="/" className="">Investors ▾</Link>
          <Link to="/" className="">News</Link>
          {/* Add more links for other pages */}
        </div>
        <div className="nav-contact">
          <Link to="/contact" className="btn button-primary">Contact Us</Link>
        </div>
      </div>
    </div>


  )
}

export default Navbar
