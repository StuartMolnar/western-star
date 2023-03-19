import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="footer-container bg-black text-white px-20 font-poppins text-copyright relative">

  <div className="footer-content w-full mb-8 mt-32">
    <div className="grid grid-cols-2 h-full">
      <div className="grid grid-cols-2 grid-rows-2 h-full col-span-1">
        <div className="flex-row items-center p-4">
          <span className="flex"><img src="src\assets\footer\mail-icon.svg" alt="email_icon" className="mr-4" /><p className="font-medium">Email</p></span>
          <a href="mailto:ming@westernstarresource.com">ming@westernstarresource.com</a>
        </div>
        <div className="flex-row items-center p-4">
          <span className="flex"><img src="src\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Business Address</p></span>
          <p>
            Unit 615 – 800 West Pender St.<br></br>
            Vancouver, BC<br></br>
            V6C 2V6
          </p>
        </div>
        <div className="flex-row items-center p-4">
          <span className="flex"><img src="src\assets\footer\phone-icon.svg" alt="phone_icon" className="mr-4" /><p className="font-medium">Phone Number</p></span>
          <a href="tel:+18009702389">+1 (800)-970-2389</a>
        </div>
        <div className="flex-row items-center p-4">
          <span className="flex"><img src="src\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Registered Office Address</p></span>
          <p>
          Unit 114B – 8988 Fraserton Court<br></br>
          Burnaby, BC<br></br>
          V5J 5H8
          </p>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  </div>
  
  <div className="footer-images">
    <div className="gradient-gray absolute top-0 left-1/2 h-4/5 w-1/4"></div>
    <div className="gradient-gold absolute top-[20%] left-2/3 h-4/5 w-1/4"></div>

    <img className="absolute top-[20%] left-2-3-minus-100px" src="src\assets\footer\footer-circle.svg" alt="" />
    <img className="absolute top-[5%] left-2-3-minus-150px" src="src\assets\footer\footer-rock-sm.png" alt="" />
    <img className="absolute top-[20%] left-2/3" src="src\assets\footer\footer-rock-lg.png" alt="" />

  </div>


  <div className="footer-copyright w-full my-16">
    <div className="flex justify-between items-center">
      <Link to="/" className="nav-logo flex h-7 items-center w-[265px]">
        <img src="src/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
        <img src="src/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
      </Link>
      <p className="opacity-50">&copy; Copyright {new Date().getFullYear()} Western Star Resources Inc.</p>      
    </div>
  </div>
</footer>

  );
};

export default Footer;
 