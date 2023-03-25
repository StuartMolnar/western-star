import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import '../styles/investors.css';


const Investors = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
    <iframe
      src={'src/assets/ws-deck.pdf'}
      width="100%"
      height="600px"
      style={{ border: "none" }}
      title="PDF Viewer">
    </iframe>
    </Layout>
  );
};

export default Investors;
