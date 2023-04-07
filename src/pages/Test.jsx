import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';




function Test() {

  
  const [menuToggleChecked, setMenuToggleChecked] = useState(false);
  const menuToggleRef = useRef(null);
  const menuRef = useRef(null);
  
  return (

    <div id="navbar" className={`Navbar w-full z-50`}>

      {/* ------------------ DESKTOP NAVBAR ------------------ */}

      <div className= {"fixed justify-between w-full flex p-12 px-5 dsk:px-32 opacity-100"}>
        
        
        {/* ------------------ MOBILE NAVBAR ------------------ */}
        

        <div id="menuToggle" className="nav-contact dsk:hidden" ref={menuToggleRef}>
        <input type="checkbox" checked={menuToggleChecked} onChange={(e) => setMenuToggleChecked(e.target.checked)} />

          
          
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
          <span className="bg-gold"></span>
        
          <ul id="menu" className="fixed bg-red-300 text-white text-card-header w-[300px] h-screen" ref={menuRef}>
            <div className="flex-row space-y-4">
                {/* Accordion 1 */}
                <details>
                    <summary className="select-none hover:text-gold inline-block w-full cursor-pointer">
                    Accordion 1
                    </summary>
                    <div className="p-4">
                    {/* Place the content of Accordion 1 here */}
                    <p>Content for Accordion 1</p>
                    </div>
                </details>

                {/* Accordion 2 */}
                <details>
                    <summary className="select-none hover:text-gold inline-block w-full cursor-pointer">
                    Accordion 2
                    </summary>
                    <div className="p-4">
                    {/* Place the content of Accordion 2 here */}
                    <p>Content for Accordion 2</p>
                    </div>
                </details>
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

    </div>
    


  )
}

export default Test
