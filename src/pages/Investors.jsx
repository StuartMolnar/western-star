import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import '../styles/investors.css';


const Investors = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <Layout setNavbarHeight={setNavbarHeight}>

    </Layout>
  );
};

export default Investors;
