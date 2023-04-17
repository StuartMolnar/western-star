import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import '../styles/Layout.css';
import useDocumentTitle from './hooks/useDocumentTitle';
import { Helmet } from 'react-helmet';

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

const Layout = ({ children, setNavbarHeight }) => {

  const location = useLocation();
  const currentTitle = getTitleForPath(location.pathname);
  useDocumentTitle(`${currentTitle}`);

  const getCanonicalUrl = () => {
    const basePath = 'https://www.westernstarresources.com';
    const path = location.pathname === '/' ? '' : location.pathname;

    return `${basePath}${path}`;
  };
  
  return (
    <div className="layout-container">
      <Helmet>
        <link rel="canonical" href={getCanonicalUrl()} />
      </Helmet>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div className="layout-content">{children}</div>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};


export default Layout;