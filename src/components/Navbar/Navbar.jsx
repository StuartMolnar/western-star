import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollContext } from '../../App'; 
import useDocumentTitle from './useDocumentTitle';

import './navbar.css'

function getTitleForPath(path) {
  const titleMap = {
    "/": "Western Star Resources",
    "/overview": "Overview - Western Star Resources",
    "/board": "Board - Western Star Resources",
    "/ws-project": "Gold Project - Western Star Resources",
    "/investors": "Investors - Western Star Resources",
    "/news": "News - Western Star Resources",
    "/legal": "Legal - Western Star Resources",
    "/western-star-plans-large-program": "Western Star Plans Large Program - Western Star Resources",
  };

  return titleMap[path] || "Western Star Resources";
}



let totalDifference = 0;

function Navbar({ setNavbarHeight }) {

  const location = useLocation();
  const currentTitle = getTitleForPath(location.pathname);
  useDocumentTitle(`${currentTitle}`);

  const [dropdown, setDropdown] = useState({ about: false, projects: false, investors: false });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuToggleChecked, setMenuToggleChecked] = useState(false);
  const menuToggleRef = useRef(null);
  const menuRef = useRef(null);
  const aboutToggler = useRef(null);
  const projectsToggler = useRef(null);
  const scrollToElement = useScrollContext();
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);  
  
  // Add your dropdown items for each menu
  const aboutItems = [{ to: '/overview', label: 'Overview' }, { to: '/board', label: 'Board' }];
  const projectsItems = [{ to: '/ws-project', label: 'Western Star Project' },];
  const aboutItemsMobile = [{ to: '/overview', label: 'Overview' }, { to: '/board', label: 'Board' }];
  const projectsItemsMobile = [{ to: '/ws-project', label: 'Western Star Project' },];

  const isLink = (nav, ...additionalPaths) => {
    return (
      nav.some(item => location.pathname === item.to) ||
      additionalPaths.some(path => location.pathname === path)
    );
  };

  const [accordionOpen, setAccordionOpen] = useState({
    1: isLink(aboutItemsMobile),
    2: isLink(projectsItemsMobile),
  });
  

  const toggleAccordion = (accordionNumber) => (event) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [accordionNumber]: event.target.open,
    }));
  };


  const toggleDropdown = (name) => {
    // Reset all dropdown states
    setDropdown({ about: false, projects: false, investors: false });
  
    // Set the clicked dropdown's state to true
    setDropdown((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };
  

  const DropdownMenu = React.memo(({ name, items, className }) => {
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
  });



  const handleClickOutside = (event) => {
    const dropdownElements = document.querySelectorAll(".dropdown-menu");
    let clickedOutside = true;

    if (
        aboutToggler.current.contains(event.target) ||
        projectsToggler.current.contains(event.target)
    ) {
        return;
    }

    dropdownElements.forEach((element) => {
        if (element.contains(event.target)) {
            clickedOutside = false;
        }
    });

    if (clickedOutside) {
        setDropdown({ about: false, projects: false, investors: false });
    }

    // Check if the click is outside of the menuToggle or menu element
    if (
      menuToggleRef.current &&
      !menuToggleRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuToggleChecked(false);
    }
  };

  useEffect(() => {
    const aboutIsActive = isLink(aboutItemsMobile);
    const projectsIsActive = isLink(projectsItemsMobile);
  
    setAccordionOpen({
      1: aboutIsActive,
      2: projectsIsActive
    });
  }, [location]);


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
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
    
      totalDifference += prevScrollPos - currentScrollPos;
    
      if (currentScrollPos - prevScrollPos > 0) {
        totalDifference = 0;
        if (visible) {
          setScrollButtonVisible(true);
          setVisible(false);
        }
      } else {
        if (totalDifference > 150 && !visible) {
          setScrollButtonVisible(false);
          setVisible(true);
        }
      }
    
      setDropdown({ about: false, projects: false, investors: false });
    
      // Close the menu on scroll
      setMenuToggleChecked(false);
    
      setPrevScrollPos(currentScrollPos);
    
      if (currentScrollPos === 0) {
        setVisible(true);
      }
    };
    
    

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
}, [prevScrollPos, visible]);

  
  
  return (

    <div id="navbar" className={`Navbar w-full z-50`}>

      {/* ------------------ DESKTOP NAVBAR ------------------ */}

      <div ref={navbarRef} className= {`fixed justify-between w-full flex p-12 px-5 dsk:px-32 opacity-100 ${visible ? 'translate-y-0' : '-translate-y-full'} ${(prevScrollPos > 10) ? 'bg-black opacity-90' : ''} transition-transform duration-500 ease-in-out`}>
        <Link to="/" className="nav-logo flex h-7 -space-x-6 dsk:space-x-4 justify-center">
          <img src="/assets/logo/ws-icon.svg" alt="icon" className="w-[55px] scale-75 dsk:scale-100 h-[35px] dsk:mt-1.5" />
          <img src="/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px] scale-75 dsk:scale-100 mt-1 dsk:mt-2.5" />
        </Link>
        <div className="nav-links dsk:flex flex-grow justify-center items-center 2xl:gap-20 xl:gap-12 lg:gap-3 text-base font-normal hidden ">


        <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('about')} ref={aboutToggler}>    

          <div className={`flex pr-2 hover:text-gold ${isLink(aboutItems) ? 'underline text-gold font-semibold' : ''}`}>
            About
          </div>
          <div className={`flex hover:text-gold ${isLink(aboutItems) ? 'text-gold font-semibold' : ''}`}>
            ▾
          </div>
          <DropdownMenu name="about" items={aboutItems} />
        </div>

        <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('projects')} ref={projectsToggler}>
          <div className={`flex pr-2 hover:text-gold ${isLink(projectsItems) ? 'underline text-gold font-semibold' : ''}`}>
            Projects
          </div>
          <div className={`flex hover:text-gold ${isLink(projectsItems) ? 'text-gold font-semibold' : ''}`}>
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

        <NavLink to="/legal" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold' : 'select-none  hover:text-gold')}>
          Legal
        </NavLink>
        </div>

        <div className="nav-contact">
          <a onClick={() => scrollToElement('footer-container')} className="hidden dsk:button-primary">Contact Us</a>
        </div>

        
        {/* ------------------ MOBILE NAVBAR ------------------ */}
        

        <div id="menu-toggle" className="nav-contact dsk:hidden" ref={menuToggleRef}>
        <input type="checkbox" checked={menuToggleChecked} onChange={(e) => setMenuToggleChecked(e.target.checked)} />

          
          
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
        
          <ul id="menu" className="fixed bg-dark-blue text-white text-card-header w-[300px] h-screen" ref={menuRef}>
            <div className="flex-row space-y-4">
              {/* Accordion 1 */}
              <details open={accordionOpen[1]} onToggle={toggleAccordion(1)}>
              <summary className={`list-none cursor-pointer  flex pr-2 hover:text-gold ${isLink(aboutItemsMobile) ? 'text-gold font-semibold' : ''}`}>
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <p>About</p>
                    {accordionOpen[1] ? <span className="mt-3.5 ml-2 arrow-up"></span> : <span className="mt-3.5 ml-2 arrow-down"></span>}
                  </div> 
                </div>
              </summary>

                <div className="pt-4 space-y-4 pl-3 scale-90">
                  <NavLink to="/overview" className={({ isActive }) => (isActive ? 'select-none font-semibold inline-block w-full' : 'select-none hover:text-gold inline-block w-full')}>
                    Overview
                  </NavLink>
                    <NavLink to="/board" className={({ isActive }) => (isActive ? 'select-none font-semibold inline-block w-full' : 'select-none  hover:text-gold inline-block w-full')}>
                    Board
                  </NavLink>
                </div>
              </details>

              {/* Accordion 2 */}
              <details open={accordionOpen[2]} onToggle={toggleAccordion(2)}>
                <summary className={`list-none cursor-pointer flex pr-2 hover:text-gold ${isLink(projectsItemsMobile) ? 'text-gold font-semibold' : ''}`}>
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <p>Projects</p>
                    {accordionOpen[2] ? <span className="mt-3.5 ml-2 arrow-up"></span> : <span className="mt-3.5 ml-2 arrow-down"></span>}
                  </div> 
                </div>
                </summary>
                <div className="pt-4 space-y-4 pl-3 scale-90">
                  <NavLink to="/ws-project" className={({ isActive }) => (isActive ? 'select-none font-semibold inline-block w-full' : 'select-none hover:text-gold inline-block w-full')}>
                    The Western Star Project
                  </NavLink>
                </div>
              </details>
              <NavLink to="/investors" className={({ isActive }) => (isActive ? 'select-none text-gold font-semibold inline-block w-full' : 'select-none hover:text-gold inline-block w-full')}>
                Investors
              </NavLink>
              <NavLink to="/news" className={({ isActive }) => (isActive ? 'select-none text-gold font-semibold inline-block w-full' : 'select-none  hover:text-gold inline-block w-full')}>
                News
              </NavLink>
              <NavLink to="/legal" className={({ isActive }) => (isActive ? 'select-none text-gold font-semibold inline-block w-full' : 'select-none  hover:text-gold inline-block w-full')}>
                Legal
              </NavLink>

        

            </div>
          </ul>
        </div>
        
      </div>

      {/* ------------------ TOP BUTTON ------------------ */}
      
      <a onClick={() => scrollToElement('navbar')} id="scrollButton" className={`fixed bottom-4 dsk:bottom-6 right-4 dsk:right-6 rounded-lg bg-gold p-2 dsk:p-4 ${scrollButtonVisible ? 'animate-slide-up' : 'animate-slide-down'}`}>
        <img src="/assets/logo/arrow-upward.svg" className="h-5 w-5 scale-75 dsk:scale-100" alt="" />
      </a>


    </div>
    


  )
}

export default Navbar
