import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';


const Article_1 = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
    </Layout>
  );
};

export default Article_1;
