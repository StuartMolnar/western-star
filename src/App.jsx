import React from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import GoldProject from './pages/Gold-Project';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/board" element={<Board />} />
        <Route path="/ws-project" element={<GoldProject />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
