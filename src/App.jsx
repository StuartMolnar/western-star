import React, { createContext, useContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import Investors from './pages/Investors';
import News from './pages/News';
import Article_1 from './pages/articles/Article-1';
import Article_2 from './pages/articles/Article-2';
import Article_3 from './pages/articles/Article-3';
import Article_4 from './pages/articles/Article-4';
import Article_5 from './pages/articles/Article-5';
import Article_6 from './pages/articles/Article-6';
import GoldProject from './pages/Gold-Project';
import Legal from './pages/Legal';
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"


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

  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <BrowserRouter>
          <ScrollContext.Provider value={scrollToElement}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/board" element={<Board />} />
              <Route path="/ws-project" element={<GoldProject />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/news" element={<News />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/western-star-appoints-new-cfo-director" element={<Article_1 />} />
              <Route path="/western-star-enters-agreement-to-acquire-toad-river" element={<Article_2 />} />
              <Route path="/western-star-closes-toad-river-acquisition" element={<Article_3 />} />
              <Route path="/western-star-enters-agreement-with-crescita-capital" element={<Article_4 />} />
              <Route path="/western-star-enters-agreement-to-acquire-anderson" element={<Article_5 />} />
              <Route path="/western-star-closes-anderson-acquisition" element={<Article_6 />} />
            </Routes>
          </ScrollContext.Provider>
    </BrowserRouter>
  );
};

export default App;
