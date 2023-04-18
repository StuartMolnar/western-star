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

function getDescriptionForPath(path) {
  const descriptionMap = {
    "/": "Western Star is a junior Canadian exploration company with 100% ownership of the high-grade Western Star Project in the Revelstoke Mining District, British Columbia, Canada. We are committed to increasing shareholder value through cost-effective exploration practices, acquisition of high-value properties, and partnerships with industry leaders.",
    "/overview": "Discover Western Star Resources, a junior Canadian exploration company with 100% ownership of the Western Star Project in the Revelstoke Mining District, British Columbia. Learn about our strategic goals, commitment to responsible exploration, and the advantages of mining in British Columbia.",
    "/board": "Meet the experienced and dedicated board members of Western Star Resources, who guide our strategic vision and drive the company's success in the mining industry. Learn about their backgrounds, expertise, and commitment to responsible and sustainable exploration.",
    "/ws-project": "Discover the Western Star Project, an exciting gold exploration opportunity with rich mineralization, located in a geologically favorable area in Southeastern British Columbia. Learn about the project's history, geology, and ongoing exploration activities.",
    "/investors": "Explore investment opportunities with Western Star Resources, a junior Canadian exploration company. Discover our share structure, warrants outstanding, and fully diluted shares. Access our corporate presentation to gain insights into our strategy, goals, and financial performance.",
    "/news": "Stay up-to-date with the latest news, announcements, and updates from Western Star Resources. Discover insights about the company's operations, projects, and industry developments that may impact its performance.",
    "/legal": "Learn about Western Star Resources' legal and privacy policies, including forward-looking statements, investment decisions, limitation of liability, and QP statement. Understand the risks, uncertainties, and factors that may affect the company's performance and operations.",
    "/western-star-plans-large-program": "Stay updated on Western Star's 2023 work program as they prepare to launch an ambitious exploration initiative in the mineral-rich Southeastern British Columbia region. Check back for the latest news and developments.",
  }
  return descriptionMap[path] || "Western Star is a junior Canadian exploration company with 100% ownership of the high-grade Western Star Project in the Revelstoke Mining District, British Columbia, Canada. We are committed to increasing shareholder value through cost-effective exploration practices, acquisition of high-value properties, and partnerships with industry leaders.";
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

  const getDescription = () => {
    return getDescriptionForPath(location.pathname);
  }
  
  return (
    <div className="layout-container">
      <Helmet>
        <link rel="canonical" href={getCanonicalUrl()} />
        <meta name="description" content={getDescription()} />
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