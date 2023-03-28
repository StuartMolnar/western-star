import React, { createContext, useContext, useEffect } from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import Investors from './pages/Investors';
import News from './pages/News';
import Article_1 from './pages/articles/Article-1';
import GoldProject from './pages/Gold-Project';
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
          <Route path="/western-star-plans-large-program" element={<Article_1 />} />
        </Routes>
      </ScrollContext.Provider>
    </BrowserRouter>
  );
};

export default App;
