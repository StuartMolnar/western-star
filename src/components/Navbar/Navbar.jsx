import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {

  return (

    // NOTE: when designing mobile, make new tailwind breakpoint for 1200px not sm
    //       do this for navbar and footer

    <div className="Navbar">
      <div className="flex p-12 px-20 bg-black text-white">
        <Link to="/" className="nav-logo flex h-7 items-center">
          <img src="src/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="src/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <div className="nav-links flex flex-grow justify-center items-center xl:gap-20 lg:gap-14 text-base">

          <div className="flex">
            <NavLink to="/board" className={({ isActive }) => (isActive ? 'underline text-gold pr-2' : 'pr-2')}>
              About
            </NavLink>            
            <NavLink to="/board" className={({ isActive }) => (isActive ? 'text-gold' : '')}>
             ▾
            </NavLink>
          </div>

          <div className="flex">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'underline text-gold pr-2' : 'pr-2')}>
              Projects
            </NavLink>            
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-gold' : '')}>
             ▾
            </NavLink>
          </div>

          <div className="flex">
            <NavLink to="/investors" className={({ isActive }) => (isActive ? 'underline text-gold pr-2' : 'pr-2')}>
              Investors
            </NavLink>            
            <NavLink to="/investors" className={({ isActive }) => (isActive ? 'text-gold' : '')}>
             ▾
            </NavLink>
          </div>

          <NavLink to="/news" className={({ isActive }) => (isActive ? 'underline text-gold' : '')}>
            News
          </NavLink>
        </div>

        <div className="nav-contact">
          <Link to="/contact" className="button-primary">Contact Us</Link>
        </div>
      </div>
    </div>


  )
}

export default Navbar
