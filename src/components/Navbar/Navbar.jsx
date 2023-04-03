import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollContext } from '../../App'; 

import './navbar.css'

let totalDifference = 0;

function Navbar({ setNavbarHeight }) {
  const [dropdown, setDropdown] = useState({ about: false, projects: false, investors: false });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuToggleChecked, setMenuToggleChecked] = useState(false);
  const menuToggleRef = useRef(null);
  const menuRef = useRef(null);
  


  
  const scrollToElement = useScrollContext();

  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);  

  const toggleDropdown = (name) => {
    setDropdown({ ...dropdown, [name]: !dropdown[name] });
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

  // Add your dropdown items for each menu
  const aboutItems = [{ to: '/overview', label: 'Overview' }, { to: '/board', label: 'Board' }];
  const projectsItems = [{ to: '/ws-project', label: 'Western Star Project' },];
  const aboutItemsMobile = [{ to: '/overview', label: 'Overview' }, { to: '/board', label: 'Board' }];
  const projectsItemsMobile = [{ to: '/ws-project', label: 'Western Star Project' },];

  const location = useLocation();

  const aboutToggler = useRef(null);
  const projectsToggler = useRef(null);


  const isAboutLink = (nav) => {
    return nav.some(item => location.pathname === item.to);
  };

  const isProjectsLink = (nav) => {
    return nav.some(item => location.pathname === item.to);
  };

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

      <div ref={navbarRef} className= {`fixed justify-between w-full flex p-12 px-12 dsk:px-32 opacity-100 ${visible ? 'translate-y-0' : '-translate-y-full'} ${(prevScrollPos > 10) ? 'bg-black opacity-90' : ''} transition-transform duration-500 ease-in-out`}>
        <Link to="/" className="nav-logo flex h-7 items-center space-x-4">
          <img src="/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <div className="nav-links dsk:flex flex-grow justify-center items-center 2xl:gap-20 xl:gap-12 lg:gap-3 text-base font-normal hidden ">


        <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('about')} ref={aboutToggler}>    

          <div className={`flex pr-2 hover:text-gold ${isAboutLink(aboutItems) ? 'underline text-gold font-semibold' : ''}`}>
            About
          </div>
          <div className={`flex hover:text-gold ${isAboutLink(aboutItems) ? 'text-gold font-semibold' : ''}`}>
            ▾
          </div>
          <DropdownMenu name="about" items={aboutItems} />
        </div>

        <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('projects')} ref={projectsToggler}>
          <div className={`flex pr-2 hover:text-gold ${isProjectsLink(projectsItems) ? 'underline text-gold font-semibold' : ''}`}>
            Projects
          </div>
          <div className={`flex hover:text-gold ${isProjectsLink(projectsItems) ? 'text-gold font-semibold' : ''}`}>
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
        

        <div id="menuToggle" className="nav-contact dsk:hidden" ref={menuToggleRef}>
        <input type="checkbox" checked={menuToggleChecked} onChange={(e) => setMenuToggleChecked(e.target.checked)} />

          
          
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
        
          <ul id="menu" className="fixed bg-dark-blue text-white w-[300px] h-screen" ref={menuRef}>
            <div className="flex-row space-y-4">
                <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('about')} ref={aboutToggler}>    

                <div className={`flex pr-2 hover:text-gold ${isAboutLink(aboutItemsMobile) ? 'underline text-gold font-semibold' : ''}`}>
                  About
                </div>
                <div className={`flex hover:text-gold ${isAboutLink(aboutItemsMobile) ? 'text-gold font-semibold' : ''}`}>
                  ▾
                </div>
                <DropdownMenu name="about" items={aboutItemsMobile} />
              </div>
                <div className="flex cursor-pointer select-none hover:text-gold" onClick={() => toggleDropdown('projects')} ref={projectsToggler}>
                <div className={`flex pr-2 hover:text-gold ${isProjectsLink(projectsItemsMobile) ? 'underline text-gold font-semibold' : ''}`}>
                  Projects
                </div>
                <div className={`flex hover:text-gold ${isProjectsLink(projectsItemsMobile) ? 'text-gold font-semibold' : ''}`}>
                  ▾
                </div>
                <DropdownMenu name="projects" items={projectsItemsMobile} />
              </div>
                <NavLink to="/investors" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold inline-block w-full' : 'select-none hover:text-gold inline-block w-full')}>
                Investors
              </NavLink>
                <NavLink to="/news" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold inline-block w-full' : 'select-none  hover:text-gold inline-block w-full')}>
                News
              </NavLink>
                <NavLink to="/legal" className={({ isActive }) => (isActive ? 'select-none underline text-gold font-semibold inline-block w-full' : 'select-none  hover:text-gold inline-block w-full')}>
                Legal
              </NavLink>

        

            </div>
          </ul>
        </div>
        
      </div>

      {/* ------------------ TOP BUTTON ------------------ */}
      
      <a onClick={() => scrollToElement('navbar')} id="scrollButton" className={`fixed bottom-6 right-6 rounded-lg bg-gold p-4 ${scrollButtonVisible ? 'animate-slide-up' : 'animate-slide-down'}`}>
        <img src="/assets/logo/arrow-upward.svg" className="h-5 w-5" alt="" />
      </a>


    </div>
    


  )
}

export default Navbar
