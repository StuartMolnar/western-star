import React, { useState } from 'react';
import Layout from './Layout';
import '../styles/investors.css';
import { useScrollContext } from '../App'; 


const Investors = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const scrollToElement = useScrollContext();

  return (
    <Layout setNavbarHeight={setNavbarHeight}>

      {/* header section */}
      <section className="investors-header-bg px-5 dsk:px-32 py-24 dsk:py-32 2xl:py-48"
        style={{ marginTop: `${navbarHeight}px` }}>
        <h1 className="text-page-header font-semibold">
          Investors
        </h1>
        <a onClick={() => scrollToElement('shares')} className="hidden dsk:read-more-btn pt-16">Read More ▸</a>
      </section>

      {/* share structure section */}
      <section id="shares" className="share-structure mx-5 dsk:mx-auto max-w-[1200px] pt-16 dsk:pt-24">
        <h2 className="text-section-header-lg font-semibold">
          Share Structure
        </h2>
        <div className="w-full flex-row dsk:flex gap-x-6 space-y-6 dsk:space-y-0 text-black pt-16">
          <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 text-center h-full">
            <h2 className="text-section-header-lg text-gold font-semibold">
              11,396,000
            </h2>
            <p className="text-content-20 font-semibold">
              Issued & Outstanding
            </p>
          </div>
          <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 text-center h-full">
            <h2 className="text-section-header-lg text-gold font-semibold">
              6,796,000
            </h2>
            <p className="text-content-20 font-semibold">
              Warrants Outstanding
            </p>
          </div>
          <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 text-center h-full">
            <h2 className="text-section-header-lg text-gold font-semibold">
              18,192,000
            </h2>
            <p className="text-content-20 font-semibold">
              Fully Diluted
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center pt-12 dsk:pt-28 pb-12 dsk:pb-20">
        <img src="\assets\investors\investors-stock-info.png" className="hidden dsk:block" alt="" />
        <img src="\assets\investors\investors-stock-info-mobile.png" className="dsk:hidden" alt="" />
      </div>


        
       {/* corporate presentation section */}
       <section className="pdf-frame flex flex-col justify-center items-center mx-8 dsk:mx-16">
        <div className="flex-row dsk:flex max-w-[1200px] w-full justify-between">
          <h2 className="text-section-header-lg font-semibold">
            Corporate Presentation
          </h2>
          <a href="/assets/ws-deck.pdf" className="flex items-center pt-8 dsk:pt-0" download>
            <button className="button-primary">Download Presentation</button>
          </a>

        </div>
        <iframe src={'/assets/ws-deck.pdf'} title="PDF Viewer" className="border-none h-[600px] max-w-[1000px] w-full mt-16 mb-24 hidden dsk:block"></iframe>
        <a href="/assets/ws-deck.pdf" className="flex items-center pt-8 dsk:pt-0 dsk:hidden" download>
          <img src="/assets/ws-deck.jpg" alt="" />
        </a>
      </section>




    </Layout>
  );
};

export default Investors;
