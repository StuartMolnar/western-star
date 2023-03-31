import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Tooltip from '../components/Tooltip/Tooltip'; 
import '../styles/home.css';
import articlesData from '../data/articles.json';

const Home = () => {

  const latestNewsRef = useRef(null);

  useEffect(() => {
    const latestNewsHeight = latestNewsRef.current.offsetHeight / 2;
    const aboutSection = document.querySelector(".about-section-bg");
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
      <section className="hero flex p-32 relative overflow-hidden pb-56 z-10 xl:pb-82 3xl:pb-96"
               style={{ paddingTop: `${navbarHeight + 108}px` }}>
        <div className="flex flex-col w-2/3 mr-24">
          <h1 className="text-page-header font-semibold leading-[85px]">
            Driving innovation and progress in the mining industry
          </h1>
          <p className="text-section-subheader pt-8 mr-8">
            Committed to providing sustainable solutions for the future by harnessing the power of green energy metals
          </p>
        </div>

        <div className="gradient-gray absolute top-[30%] left-[50%] h-1/2 w-1/4 scale-150"></div>
        <div className="gradient-gold absolute top-[10%] left-[65%] h-1/2 w-1/4 scale-150"></div>
        
        <div className="hero-images relative w-1/2">

          <img className="absolute top-0 left-[400px]" src="\assets\hero\hero-circle-sm.svg" alt="" />
          <img className="absolute top-[250px] left-16" src="\assets\hero\hero-circle-md.svg" alt="" />
          <img className="absolute top-8 left-48 scale-[1.15]" src="\assets\hero\hero-circle-lg.svg" alt="" />
          <img className="absolute -top-[30px] left-[50px] w-[451px] h-[380px]" src="\assets\hero\hero-rocks.png" alt="" />
        </div>
      </section>

      {/* about company section */}
      <section className="latest-news bg-white flex flex-grow justify-between items-center text-base font-normal rounded-2xl mx-32 p-8 -mt-4 relative z-20" ref={latestNewsRef}>
        <div>
          <h3 className="text-container-header text-black font-semibold">
            Latest News
          </h3>
          <p className="text-dark-blue">
            {getLastArticleTitle()}
          </p>
        </div>          
        <div className="button-container ml-12">
          <Link to={`${getLastArticleUrl()}`} className="button-accent align-self-end cursor-pointer">Read Full Article</Link>
        </div>
      </section>

      <section className="about-section-bg flex-row text-black relative pt-48 pb-96 xl:pb-[500px]">
        <div className="flex mx-32 gap-x-24">
          <div className="flex-row w-1/2">
            <h2 className="text-section-header-lg font-semibold">
              About Western Star
            </h2>
            
            <Link to="/overview" className="button-primary mt-6 cursor-pointer">Learn More</Link>
          </div>

          <p className="w-1/2 mt-6 2xl:px-24">Western Star is an emerging, recently-listed junior mining company that has secured <span className="font-semibold">100%</span> ownership of the high-grade Western Star Project. This venture is situated in the renowned Revelstoke Mining District of British Columbia, Canada, an area known for its abundant mineral resources and a history of successful mining operations.</p>

        </div>
      </section>

      {/* explore projects section */}

      <section className="explore-projects flex flex-col items-center justify-center mx-32 xl:mb-24">
        <h2 className="text-section-header-lg font-semibold text-center mb-6 mt-24">
          Explore Our Projects
        </h2>
        <p>Discover our latest mining ventures and unearth our potentials</p>
        <div className="flex flex-row gap-x-8 my-16">
          <div className="explore-section-bg w-1/2 rounded-2xl"></div>
          <div className="flex flex-col w-1/2 max-w-[1150px] bg-light-blue text-black py-20 px-16 rounded-2xl">
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
      <section className="map-section flex items-center ml-32 overflow-clip h-auto mb-24 xl:mb-32">
        <h2 className="text-section-header-lg font-semibold py-24 w-2/5 pr-24">
          Our 2,797ha property is located 50km southeast of <span className="text-gold">Revelstoke</span>, BC - consisting of <span className="text-gold">11</span> documented mineral showings.
        </h2>
        <div className="revelstoke-map flex-1 h-full relative">
          <img src="/assets/index/map.jpg" alt="" className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl" />
          <Tooltip content="Black Bear" style={{ top: '76.9%', left: '51.2%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Lardeau-Goldsmith" style={{ top: '59.8%', left: '49.9%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Wide West" style={{ top: '44%', left: '57%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Goodenough" style={{ top: '69.1%', left: '71.7%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Kitsap" style={{ top: '40%', left: '22.9%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Banner" style={{ top: '21.5%', left: '14.3%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Daffodil" style={{ top: '12.2%', left: '10.2%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Royal" style={{ top: '36%', left: '19.25%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Morning Star" style={{ top: '15%', left: '23.35%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Lexington" style={{ top: '31.6%', left: '19.6%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>
          <Tooltip content="Alma" style={{ top: '54%', left: '33.2%' }}>
            <div className="point w-3 h-3 bg-red-400 rounded-full"></div>
          </Tooltip>

        </div>

      </section>

      {/* news section */}
      <section className="news-section-bg px-32 py-40">
        <div className="flex items-center pb-16 gap-x-24">
          <h2 className="text-section-header-lg font-semibold">Our Latest News</h2>
          <Link to="/news" className="button-primary cursor-pointer">View All News</Link>
        </div>
        <div className="flex flex-col bg-black max-w-[400px] rounded-3xl p-12">
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
