import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import './navbar.css'

function Navbar() {

  const [dropdown, setDropdown] = useState({ about: false, projects: false, investors: false });

  const toggleDropdown = (name) => {
    setDropdown({ ...dropdown, [name]: !dropdown[name] });
  };

  const DropdownMenu = ({ name, items, className }) => {
    return (
      <div
        className={`dropdown-menu bg-white text-black rounded-lg p-2 mt-10 w-auto absolute z-50 ${
          dropdown[name] ? 'block' : 'hidden'
        } ${className}`}
      >
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={`block px-4 py-2 ${
              location.pathname === item.to ? 'font-semibold' : ''
            } hover:text-gold hover:underline`}
            onClick={() => toggleDropdown(name)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    );
  };

  // Add your dropdown items for each menu
  const aboutItems = [{ to: '/overview', label: 'Overview' }, { to: '/board', label: 'Board' }];
  const projectsItems = [{ to: '/ws-project', label: 'Western Star Project' },];

  const location = useLocation();

  const isAboutLink = () => {
    return aboutItems.some(item => location.pathname === item.to);
  };

  const isProjectsLink = () => {
    return projectsItems.some(item => location.pathname === item.to);
  };

  const handleClickOutside = (event) => {
    if (dropdown.about || dropdown.projects || dropdown.investors) {
      const dropdownElements = document.querySelectorAll(".dropdown-menu");
      let clickedOutside = true;
  
      dropdownElements.forEach((element) => {
        if (element.contains(event.target)) {
          clickedOutside = false;
        }
      });
  
      if (clickedOutside) {
        setDropdown({ about: false, projects: false, investors: false });
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);
  

  return (

    // NOTE: when designing mobile, make new tailwind breakpoint for 1200px not sm
    //       do this for navbar and footer

    <div className="Navbar">
      <div className="flex p-12 px-32 bg-transparent">
        <Link to="/" className="nav-logo flex h-7 items-center">
          <img src="src/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="src/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <div className="nav-links flex flex-grow justify-center items-center xl:gap-20 lg:gap-14 text-base font-normal">


          <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('about')}>    

            <div className={`flex pr-2 hover:text-gold ${isAboutLink() ? 'underline text-gold font-semibold' : ''}`}>
              About
            </div>
            <div className={`flex hover:text-gold ${isAboutLink() ? 'text-gold font-semibold' : ''}`}>
              ▾
            </div>
            <DropdownMenu name="about" items={aboutItems} />
          </div>

          <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('projects')}>
            <div className={`flex pr-2 hover:text-gold ${isProjectsLink() ? 'underline text-gold font-semibold' : ''}`}>
              Projects
            </div>
            <div className={`flex hover:text-gold ${isProjectsLink() ? 'text-gold font-semibold' : ''}`}>
              ▾
            </div>
            <DropdownMenu name="projects" items={projectsItems} />
          </div>

          <NavLink to="/investors" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold' : 'select-none hover:text-gold')}>
            Investors
          </NavLink>

          <NavLink to="/news" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold' : 'select-none  hover:text-gold')}>
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
