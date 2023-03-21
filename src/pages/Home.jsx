import React, { useRef, useEffect } from 'react';
import Layout from './Layout';
import Tooltip from '../components/Tooltip/Tooltip'; 
import '../styles/home.css';

const Home = () => {

  const latestNewsRef = useRef(null);

  useEffect(() => {
    const latestNewsHeight = latestNewsRef.current.offsetHeight / 2;
    const aboutSection = document.querySelector(".about-section-bg");
    aboutSection.style.marginTop = `-${latestNewsHeight}px`;
  }, [latestNewsRef]);
  


  return (
    <Layout>
      {/* Hero section */}
      <section className="hero flex p-32 pt-24 relative overflow-hidden pb-56 z-10">
        <div className="flex flex-col w-2/3 mr-24">
          <h1 className="text-page-header font-semibold leading-[85px]">
            Driving innovation and progress in the mining industry
          </h1>
          <p className="text-section-subheader pt-8 mr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit libero, sagittis sed quam at
          </p>
        </div>

        <div className="gradient-gray absolute top-[30%] left-[50%] h-1/2 w-1/4 scale-150"></div>
        <div className="gradient-gold absolute top-[10%] left-[65%] h-1/2 w-1/4 scale-150"></div>
        
        <div className="hero-images relative w-1/2">

          <img className="absolute top-0 left-[400px]" src="src\assets\hero\hero-circle-sm.svg" alt="" />
          <img className="absolute top-[250px] left-16" src="src\assets\hero\hero-circle-md.svg" alt="" />
          <img className="absolute top-8 left-48" src="src\assets\hero\hero-circle-lg.svg" alt="" />
          <div className="hero-rocks animate-bounce">
            <img className="absolute top-8 left-16" src="src\assets\hero\hero-rock-lg.png" alt="" />
            <img className="absolute top-36 left-44" src="src\assets\hero\hero-rock-sm.png" alt="" />
          </div>
        </div>
      </section>

      {/* about company section */}
      <section className="latest-news bg-white flex flex-grow justify-between items-center text-base font-normal rounded-2xl mx-32 p-8 -mt-4 relative z-20" ref={latestNewsRef}>
        <div>
          <h3 className="text-container-header text-black font-semibold">
            Latest News: Exploits Commences Drilling At Bullseye Gold Target
          </h3>
          <p className="text-dark-blue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit libero, sagittis sed...
          </p>
        </div>          
        <div className="button-container ml-12">
          <div to="/contact" className="button-accent align-self-end cursor-pointer">Contact Us</div>
        </div>
      </section>

      <section className="about-section-bg flex-row text-black relative pt-48 pb-96 xl:pb-[500px]">
        <div className="flex mx-32 gap-x-24">
          <div className="flex-row w-1/2">
            <h2 className="text-section-header-lg font-semibold">
              About Western Star
            </h2>
            
            <div to="/contact" className="button-primary mt-6 cursor-pointer">Learn More</div>
          </div>

          <p className="w-1/2 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum tellus sed metus efficitur iaculis. Duis imperdiet lectus eu nibh pretium feugiat. Aenean scelerisque feugiat nulla, a venenatis quam gravida vel. Sed semper non nisl vel finibus. Donec auctor euismod rutrum. Donec ornare a sem ut pulvinar. Fusce eget mauris mattis, laoreet nibh eget, scelerisque nulla.</p>

        </div>
      </section>

      {/* explore projects section */}

      <section className="explore-projects flex flex-col items-center justify-center mx-32">
        <h2 className="text-section-header-lg font-semibold text-center mb-6 mt-24">
          Explore Our Projects
        </h2>
        <p>Discover our latest mining ventures and unearth our potentials</p>
        <div className="flex flex-row gap-x-8 my-16">
          <div className="explore-section-bg w-1/2 rounded-2xl"></div>
          <div className="flex flex-col w-1/2 max-w-[1150px] bg-light-blue text-black py-16 px-12 rounded-2xl">
            <h3 className="text-section-header-md font-semibold">
              The Western Star Project
            </h3>
            <p className="pt-12">
            The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
            </p>
            <div className="flex ">
              <div className="button-accent mt-6 cursor-pointer">Read Full Project</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* revelstoke map section */}
      <section className="map-section flex items-center mx-32 mt-24 overflow-clip h-auto">
        <h2 className="text-section-header-lg font-semibold w-2/5 pr-24">
          Our 2,797ha property is located 50km southeast of <span className="text-gold">Revelstoke</span>, BC - consisting of <span className="text-gold">9</span> documented mineral showings.
        </h2>
        <div className="revelstoke-map flex-1 h-full relative">
          <img src="src/assets/index/map.png" alt="" className="w-full h-full object-cover" />
          <Tooltip content="Black Bear" style={{ top: '82.7%', left: '66.7%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Lardeau-Goldsmith" style={{ top: '64.8%', left: '65%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Wide West" style={{ top: '47.7%', left: '72.35%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Goodenough" style={{ top: '74.3%', left: '88.1%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Hunter" style={{ top: '62.3%', left: '73%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Kitsap" style={{ top: '43.6%', left: '37.4%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Banner" style={{ top: '23.8%', left: '28.8%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Daffodil" style={{ top: '14.2%', left: '24.7%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Royal" style={{ top: '39.4%', left: '33.8%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Morning Star" style={{ top: '17.2%', left: '38.07%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Lexington" style={{ top: '34.6%', left: '34.1%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>
          <Tooltip content="Alma" style={{ top: '58.5%', left: '47.9%' }}>
            <div className="point w-4 h-4 bg-red-400 rounded-full hover:scale-125"></div>
          </Tooltip>

        </div>

      </section>

      {/* news section */}
      <section className="news-section-bg px-32 py-40">
        <div className="flex items-center text-black pb-16 gap-x-24">
          <h2 className="text-section-header-lg font-semibold">Our Latest News</h2>
          <div className="button-primary cursor-pointer">View All News</div>
        </div>
        <div className="flex flex-col bg-black max-w-[400px] rounded-3xl p-12">
          <h3 className="text-section-subheader font-semibold">
            Western Star plans large program on its 100% Western Star CRD/Sedex Project
          </h3>
          <p className="text-card-subheader mt-6">
            April 1, 2023
          </p>
          <hr className="my-8" />
          <a className="read-more-btn font-normal text-base text-gold cursor-pointer">Read More ▸</a>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
