import React from 'react';
import Layout from './Layout';
import '../styles/home.css';

const Home = () => {
  return (
    <Layout>
      <section className="flex p-32 pt-24 relative overflow-hidden h-[70vh]">
        <div className="flex flex-col w-2/3 mr-24">
          <h1 className="text-page-header font-semibold">
            Driving innovation and progress in the mining industry
          </h1>
          <p className="text-section-subheader pt-8 mr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit libero, sagittis sed quam at
          </p>
        </div>

        <div className="gradient-gray absolute top-[30%] left-[45%] h-4/5 w-1/4"></div>
        <div className="gradient-gold absolute top-[5%] left-[70%] h-4/5 w-1/4"></div>
        
        <div className="hero-images relative w-1/2">

          <img className="absolute top-16 left-[400px]" src="src\assets\hero\hero-circle-sm.svg" alt="" />
          <img className="absolute top-[350px] left-16" src="src\assets\hero\hero-circle-md.svg" alt="" />
          <img className="absolute top-32 left-48" src="src\assets\hero\hero-circle-lg.svg" alt="" />
          <div className="hero-rocks animate-bounce">
            <img className="absolute top-24 left-16" src="src\assets\hero\hero-rock-lg.png" alt="" />
            <img className="absolute top-52 left-44" src="src\assets\hero\hero-rock-sm.png" alt="" />
          </div>
        </div>
      </section>

      {/* todo fix positioning of this 
          position absolutely ontop of background image section
          give negative top value */}
      <section className="flex my-32 text-black h-44">
        <div className="flex flex-row bg-white shadow rounded-2xl mx-32 w-full">
          <div className="flex flex-col">
            <h3 className="text-container-header font-semibold">
              Latest News: Exploits Commences Drilling At Bullseye Gold Target
            </h3>
            <p className="text-dark-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit libero, sagittis sed...</p>
          </div>
          <a className="button-accent h-[40px]">Read Full Story</a>

        </div>
      </section>
    </Layout>
  );
};

export default Home;
