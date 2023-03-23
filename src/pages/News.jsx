import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import '../styles/news.css';


const News = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <Layout setNavbarHeight={setNavbarHeight}>


    </Layout>
  );
};

export default News;



