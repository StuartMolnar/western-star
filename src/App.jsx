import React, { createContext, useContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import Investors from './pages/Investors';
import News from './pages/News';
import Article_1 from './pages/articles/Article-1';
import GoldProject from './pages/Gold-Project';
import Legal from './pages/Legal';
import Test from './pages/Test';
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"
import Preloader from './components/Preloader/Preloader';

// List all the images you want to preload
const imagesToPreload = [
  '/assets/index/about-section-bg.png',
  '/assets/overview/header-section-bg.jpg',
  '/assets/news/news-header-bg.png',
  '/assets/gold-project/header-section-bg.png',
  '/assets/board/header-section-bg.png',
  // Add more image URLs here
];

const ScrollContext = createContext(null);

export const useScrollContext = () => useContext(ScrollContext);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
};

const App = () => {

  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    // Preload all images and hide the preloader when done
    const loadImages = async () => {
      await Promise.all(
        imagesToPreload.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              console.log(`Loaded image: ${img.src}`);
              resolve();
            };
            img.onerror = () => {
              console.error(`Failed to load image: ${img.src}`);
              reject();
            };
          });
        })
      );
      setIsPreloading(false);
    };
  
    loadImages();
  }, []);

  //const contentClass = isPreloading ? 'hidden' : '';
  

  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <BrowserRouter>
      {/* {isPreloading && <Preloader />}
        <div className={contentClass}> */}
          <ScrollContext.Provider value={scrollToElement}>
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/board" element={<Board />} />
              <Route path="/ws-project" element={<GoldProject />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/news" element={<News />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/western-star-plans-large-program" element={<Article_1 />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </ScrollContext.Provider>
        {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
