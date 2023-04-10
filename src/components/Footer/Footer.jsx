import React from 'react';
import './footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // Get the location object

  // Check if the current path is '/overview' or '/ws-project'
  const isSpecialPage = location.pathname === '/overview' || location.pathname === '/ws-project';

  return (
    <footer id="footer-container" className={`footer-container px-5 dsk:px-32 text-copyright relative overflow-hidden ${isSpecialPage ? 'pt-72' : ''}`}>

    <Link to="/" className="nav-logo h-7 items-center w-[265px] -space-x-6 dsk:space-x-4 flex dsk:hidden mb-8 mt-16 dsk:mt-24">
      <img src="/assets/logo/ws-icon.svg" alt="icon" className="w-[55px] scale-75 dsk:scale-100" />
      <img src="/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px] scale-75 dsk:scale-100" />
    </Link>
    
    <div className="footer-content w-full mb-8 dsk:mt-32 mt-8">
      <div className="grid grid-cols-2 h-full">
        <div className="dsk:grid dsk:grid-cols-2 grid-rows-2 h-full col-span-2 dsk:col-span-1 justify-center">
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="\assets\footer\mail-icon.svg" alt="email_icon" className="mr-4" /><p className="font-medium">Email</p></span>
            <p><a href="mailto:blake@acvc.vc">blake@acvc.vc</a></p>
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Business Address</p></span>
            <p><a href="https://goo.gl/maps/6nH9b1mp92wckqCy9">
              Unit 615 – 800 West Pender St.<br></br>
              Vancouver, BC<br></br>
              V6C 2V6
            </a></p>
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="\assets\footer\phone-icon.svg" alt="phone_icon" className="mr-4" /><p className="font-medium">Phone Number</p></span>
            <p><a href="tel:+12368784938">+1 (236)-878-4938</a></p>          
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Registered Office Address</p></span>
            <p><a href="https://goo.gl/maps/6nH9b1mp92wckqCy9">
              Unit 615 – 800 West Pender St.<br></br>
              Vancouver, BC<br></br>
              V6C 2V6
            </a></p>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>

    
    <div className={`dsk:hidden gradient-gray absolute ${isSpecialPage ? 'top-[20%]' : 'top-0'}  h-4/5 w-1/4 scale-100`}></div>
    <div className={`dsk:hidden gradient-gold absolute ${isSpecialPage ? 'top-[45%]' : 'top-[25%]'} left-2/4 h-4/5 w-1/2 scale-100`}></div>
    
    <div className="footer-images hidden dsk:block">
      <div className={`gradient-gray absolute ${isSpecialPage ? 'top-[20%]' : 'top-0'} left-1/2 h-4/5 w-1/4 scale-150`}></div>
      <div className={`gradient-gold absolute ${isSpecialPage ? 'top-[45%]' : 'top-[25%]'} left-3/4 h-4/5 w-1/4 scale-150`}></div>

      <img className={`absolute ${isSpecialPage ? 'top-[52%] left-[61.5%]' : 'top-[25%] left-[60.5%]'}`} src="\assets\footer\footer-circle.svg" alt="" />
      <img className={`absolute ${isSpecialPage ? 'top-[46%]' : 'top-[20%]'} left-[62%]`} src="\assets\footer\footer-rock-lg.webp" alt="" />
      <img className={`absolute ${isSpecialPage ? 'top-[48%]' : 'top-[21.5%]'} left-[62%]`} src="\assets\footer\footer-rock-sm.webp" alt="" />
    </div>


    <div className="footer-copyright w-full my-16">
      <div className="flex justify-between items-center">
        <Link to="/" className="nav-logo h-7 items-center w-[265px] space-x-4 hidden dsk:flex">
          <img src="/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <p className="opacity-50">&copy; Copyright {new Date().getFullYear()} Western Star Resources Inc.</p>      
      </div>
    </div>
  </footer>

  );
};

export default Footer;
 