import React, { useRef } from 'react';
import { useScrollContext } from '../../App'; 

const Article_1 = ({ navbarHeight, article}) => {
    
  const scrollToElement = useScrollContext();
  /*const imgUrl = `/assets/articles/article-${article.id}/article-header-bg.webp`;
  
  
  const headerStyle = {
      backgroundImage: `linear-gradient(99.98deg, rgba(0, 0, 0, 0.8) 8.86%, rgba(0, 0, 0, 0.4) 74.38%, rgba(0, 0, 0, 0) 100%), url('${imgUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
  };*/

  return (
    <>
      {/* header section */}
      <section className="bg-white border-black border-b-2 py-5 2xl:py-12"
              style={{marginTop: `${navbarHeight}px` }}>
        <div className="mx-5 dsk:mx-32 ">
          <div className="text-gold font-semibold text-content-20">{article.date}</div>
          <h1 className="text-page-header text-black font-semibold 2xl:w-2/3 pt-6">
            {article.title}
          </h1>
          <p className="flex flex-col">
            <div className="hidden dsk:read-more-btn pt-16" onClick={() => scrollToElement('article-content')}>Read More ▸</div>
            <a href="/news" className="hidden dsk:read-more-btn pt-4">Back</a>
          </p>
        </div> 
        
        
      </section>
    </>
  );
};

export default Article_1;
