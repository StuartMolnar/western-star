import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Tooltip from '../components/Tooltip/Tooltip'; 
import '../styles/home.css';
import articlesData from '../data/articles.json';

const Home = () => {

  const latestNewsRef = useRef(null);
  const [paddingValue, setPaddingValue] = useState(108);

  const updatePaddingValue = () => {
    if (window.innerWidth >= 1200) {
      setPaddingValue(108);
    } else {
      setPaddingValue(0);
    }
  };

  useEffect(() => {
    updatePaddingValue();
    window.addEventListener("resize", updatePaddingValue);
  
    return () => {
      window.removeEventListener("resize", updatePaddingValue);
    };
  }, []);
  
  

  useEffect(() => {
    const latestNewsHeight = latestNewsRef.current.offsetHeight / 2;
    const aboutSection = document.getElementById('about-section');
    aboutSection.style.marginTop = `-${latestNewsHeight}px`;
  }, [latestNewsRef]);

  const [navbarHeight, setNavbarHeight] = useState(0);


  const getLastArticleTitle = () => {
    const lastArticle = articlesData[articlesData.length - 1];
    return lastArticle.title;
  };
  
  const getLastArticleUrl = () => {
    const lastArticle = articlesData[articlesData.length - 1];
    return lastArticle.url;
  };
  

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
      {/* Hero section */}
      
      
      <div className="gradient-gray absolute top-[20%] left-[20%] h-1/2 w-1/4 scale-150  dsk:hidden"></div>
      <div className="gradient-gold absolute top-[00%] left-[55%] h-1/2 w-1/4 scale-150  dsk:hidden"></div>

      <section className="hero dsk:flex dsk:p-32 relative overflow-hidden dsk:pb-56 z-10 xl:pb-82 3xl:pb-96"
               style={{ paddingTop: `${navbarHeight + paddingValue}px` }}>
        <div className="flex flex-col w-full dsk:w-2/3 dsk:mr-24">
          <h1 className="text-page-header font-semibold dsk:leading-[85px] px-5 dsk:px-0">
            Driving innovation and progress in the mining industry
          </h1>
          <p className="text-section-subheader pt-8 mr-8 dsk:pb-0 px-5 dsk:px-0">
            Committed to providing sustainable solutions for the future by harnessing the power of green energy metals
          </p>
        </div>

        <div className="gradient-gray absolute top-[30%] left-[50%] h-1/2 w-1/4 scale-150 hidden dsk:block"></div>
        <div className="gradient-gold absolute top-[10%] left-[65%] h-1/2 w-1/4 scale-150 hidden dsk:block"></div>
        
        
        <div className="hero-images relative w-1/2 hidden dsk:flex dsk:pb-56 z-10 xl:pb-82 3xl:pb-96">
          <img className="absolute -top-[30px] left-[50px] min-w-[451px] w-[451px] min-h-[380px] h-[380px] scale-125" src="\assets\hero\hero-rocks.png" alt="" />
        </div>

        <div className="w-full flex items-center justify-center dsk:hidden">
          <img className="min-w-[451px] w-[451px] min-h-[380px] h-[380px] scale-75" src="\assets\hero\hero-rocks.png"/>
        </div>
        

      
      </section>

      {/* about company section */}
      <section className="latest-news bg-white flex-row dsk:flex flex-grow justify-between items-center text-base font-normal rounded-2xl dsk:mx-32 mx-5 p-8 relative z-20" ref={latestNewsRef}>
        <div>
          <h3 className="text-container-header text-black font-semibold pb-2">
            Latest News
          </h3>
          <p className="text-dark-blue">
            {getLastArticleTitle()}
          </p>
        </div>          
        <div className="button-container dsk:ml-12 mt-6 dsk:mt-0">
          <Link to={`${getLastArticleUrl()}`} className="button-accent align-self-end cursor-pointer">Read Full Article</Link>
        </div>
      </section>

      <section id="about-section" className="about-section-bg-mobile dsk:about-section-bg flex-row text-black relative pt-40 dsk:pt-48 h-[700px] dsk:h-[700px] dsk:pb-96 xl:pb-[500px] bg-top dsk:bg-center">
        <div className="flex-row dsk:flex mx-5 dsk:mx-32 gap-x-24">
          <div className="flex-row dsk:w-1/2">
            <h2 className="text-section-header-lg font-semibold">
              About Western Star
            </h2>
            
            <Link to="/overview" className="button-primary mt-6 cursor-pointer">Learn More</Link>
          </div>

          <p className="dsk:w-1/2 mt-6 2xl:px-24">Western Star is an emerging, recently-listed junior mining company that has secured <span className="font-semibold">100%</span> ownership of the high-grade Western Star Project. This venture is situated in the Revelstoke Mining District of British Columbia, Canada, an area known for its abundant mineral resources and a history of successful mining operations.</p>

        </div>
      </section>

      {/* explore projects section */}

      <section className="explore-projects flex flex-col items-center justify-center xl:mb-24">
        <h2 className="text-section-header-lg font-semibold text-center mb-6 mt-12 dsk:mt-24 mx-5 dsk:mx-32">
          Explore Our Projects
        </h2>
        <p className="mx-5 pb-12 dsk:pb-0 dsk:mx-32 text-center">Discover our latest mining ventures and unearth our potentials</p>
        <div className="dsk:flex flex-row gap-x-8 mt-0 dsk:my-16 mx-0 dsk:mx-32">
          <img src="/assets/index/explore-section-bg.png" className="explore-section-bg dsk:w-1/2 dsk:rounded-2xl object-cover object-center bg-no-repeat"></img>
          <div className="flex flex-col dsk:w-1/2 max-w-[1150px] bg-light-blue text-black py-12 dsk:py-20 px-8 dsk:px-16 dsk:rounded-2xl">
            <h3 className="text-section-header-md font-semibold">
              The Western Star Project
            </h3>
            <p className="pt-8">
            The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
            </p>
            <div className="flex ">
              <Link to="/ws-project" className="button-accent mt-12 cursor-pointer">Read Full Project</Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* revelstoke map section */}
      <section className="map-section flex-row dsk:flex items-center dsk:ml-32 overflow-clip h-auto dsk:mb-24 xl:mb-32">
        <h2 className="text-section-header-lg font-semibold px-5 dsk:px-0 py-24 dsk:w-2/5 dsk:pr-24">
          Our 2,797 ha property consists of <span className="text-gold">11</span> documented mineral showings.
        </h2>
        <div className="revelstoke-map flex-1 h-full relative">
          <img src="/assets/index/map.jpg" alt="" className="w-full h-full object-cover dsk:rounded-tl-2xl dsk:rounded-bl-2xl" />
          <Tooltip content="Black Bear" style={{ top: '76.9%', left: '51.2%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Lardeau-Goldsmith" style={{ top: '59.8%', left: '49.9%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Wide West" style={{ top: '44%', left: '57%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Goodenough" style={{ top: '69.1%', left: '71.7%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Kitsap" style={{ top: '40%', left: '22.9%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Banner" style={{ top: '21.5%', left: '14.3%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Daffodil" style={{ top: '12.2%', left: '10.2%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Royal" style={{ top: '36%', left: '19.25%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Morning Star" style={{ top: '15%', left: '23.35%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Lexington" style={{ top: '31.6%', left: '19.6%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>
          <Tooltip content="Alma" style={{ top: '54%', left: '33.2%' }}>
            <div className="point hidden dsk:block w-3 h-3 bg-red-400 rounded-full hover:scale-110"></div>
          </Tooltip>

        </div>

      </section>

      {/* news section */}
      <section className="news-section-bg dsk:px-32 py-16 dsk:py-40">
        <div className="flex-row dsk:flex items-center pb-16 gap-x-24 mx-5 dsk:mx-0 space-y-8 dsk:space-y-0">
          <h2 className="text-section-header-lg font-semibold">Our Latest News</h2>
          <Link to="/news" className="button-primary cursor-pointer">View All News</Link>
        </div>
        <div className="flex flex-col bg-black dsk:max-w-[400px] mx-5 dsk:mx-0 rounded-3xl p-8 dsk:p-12">
          <h3 className="text-section-subheader font-semibold">
            Western Star plans large program on its 100% Western Star CRD/Sedex Project
          </h3>
          <p className="text-card-subheader mt-6">
            April 1, 2023
          </p>
          <hr className="my-8" />
          <Link to="/western-star-plans-large-program" className="read-more-btn">Read More ▸</Link>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
