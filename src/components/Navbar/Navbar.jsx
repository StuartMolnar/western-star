import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollContext } from '../../App'; 

import './navbar.css'

let totalDifference = 0;

function Navbar({ setNavbarHeight }) {
  const [dropdown, setDropdown] = useState({ about: false, projects: false, investors: false });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  
  const scrollToElement = useScrollContext();
  

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

  const navbarRef = useRef(null);


  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNavbarHeight, dropdown]);

  
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      totalDifference += prevScrollPos - currentScrollPos;
  
      if (currentScrollPos - prevScrollPos > 0) {
        totalDifference = 0;
        if (visible){
          scrollButton.classList.remove('hidden');
          scrollButton.classList.remove('animate-slide-down');
          scrollButton.classList.add('animate-slide-up');
          setVisible(false);
        }
      } else {
        if (totalDifference > 150 && !visible) {
          scrollButton.classList.remove('animate-slide-up');
          scrollButton.classList.add('animate-slide-down');
          setTimeout(() => {
            scrollButton.classList.add('hidden');
          }, 450);
          setVisible(true);
        }
      }
  
      setPrevScrollPos(currentScrollPos);
  
      if (currentScrollPos === 0) {
        setVisible(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  
  
  return (

    // NOTE: when designing mobile, make new tailwind breakpoint for 1200px not sm
    //       do this for navbar and footer
    // ${(prevScrollPos > 10 || totalDifference > 150) ? 'bg-black opacity-90' : ''}

    <div id="navbar" className={`Navbar w-full z-50`}>

      <div ref={navbarRef} className= {`fixed w-full flex p-12 px-32 opacity-100 ${visible ? 'translate-y-0' : '-translate-y-full'} ${(prevScrollPos > 10) ? 'bg-black opacity-90' : ''} transition-transform duration-500 ease-in-out`}>
        <Link to="/" className="nav-logo flex h-7 items-center">
          <img src="/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
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
          <a onClick={() => scrollToElement('footer-container')} className="button-primary">Contact Us</a>
        </div>
      </div>
      
      <a onClick={() => scrollToElement('navbar')} id="scrollButton" className={`hidden fixed bottom-6 right-6 rounded-lg bg-gold p-4`}>
        <img src="/assets/logo/arrow-upward.svg" className="h-5 w-5" alt="" />
      </a>






    </div>
    


  )
}

export default Navbar
