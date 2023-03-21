import React, { useRef, useEffect } from 'react';
import Layout from './Layout';
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
      <section className="flex p-32 pt-24 relative overflow-hidden pb-56 z-10">
        <div className="flex flex-col w-2/3 mr-24">
          <h1 className="text-page-header font-semibold leading-[85px]">
            Driving innovation and progress in the mining industry
          </h1>
          <p className="text-section-subheader pt-8 mr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit libero, sagittis sed quam at
          </p>
        </div>

        <div className="gradient-gray absolute rounded-[200px] top-[30%] left-[50%] h-1/2 w-1/4 scale-150"></div>
        <div className="gradient-gold absolute rounded-[200px] top-[10%] left-[65%] h-1/2 w-1/4 scale-150"></div>
        
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
          <div to="/contact" className="button-primary align-self-end">Contact Us</div>
        </div>
      </section>

      <section className="about-section-bg flex-row text-black relative pt-48 pb-96 xl:pb-[500px]">
        <div className="flex mx-32 gap-x-24">
          <div className="flex-row w-1/2">
            <h2 className="text-section-header-lg font-semibold">
              About Western Star
            </h2>
            
            <div to="/contact" className="button-primary mt-6">Contact Us</div>
          </div>

          <p className="w-1/2 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum tellus sed metus efficitur iaculis. Duis imperdiet lectus eu nibh pretium feugiat. Aenean scelerisque feugiat nulla, a venenatis quam gravida vel. Sed semper non nisl vel finibus. Donec auctor euismod rutrum. Donec ornare a sem ut pulvinar. Fusce eget mauris mattis, laoreet nibh eget, scelerisque nulla.</p>

        </div>
      </section>
    </Layout>
  );
};

export default Home;
