import React from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import Projects from './pages/Projects';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/board" element={<Board />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
