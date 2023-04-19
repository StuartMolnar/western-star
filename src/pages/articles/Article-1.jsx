import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 1;
const article = articles.find((article) => article.id === articleId);


const Article_1 = () => {

  const [navbarHeight, setNavbarHeight] = useState(0); 


  return (
    <>    
      <HelmetProvider>
          <Helmet>
          <meta name="robots" content="noindex"></meta>
          </Helmet>
      </HelmetProvider>
      <Layout setNavbarHeight={setNavbarHeight}>

        <ArticleHeader navbarHeight={navbarHeight} article={article} />

        {/* content section */}
        <section id="article-content" className="article-content px-12 dsk:px-32 bg-white text-black">
          <h2 className="text-section-header-lg font-semibold pt-12">
            Coming Soon
          </h2>
          <p className="py-12">
            This article is currently under construction. Please check back later.
          </p>
        </section>
      </Layout>
    </>
  );
};

export default Article_1;
