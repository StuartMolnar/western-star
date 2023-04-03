import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import '../styles/overview.css';
import { useScrollContext } from '../App'; 


const Overview = () => {
  const scrollToElement = useScrollContext();
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    { title: 'Strong Mining Ecosystem', 
      points: ['• 326 active exploration Projects', '• $660 million exploration spending', 
               '• 1,442,319 meters of drilling', '• 17 operating mines'] },
    { title: 'Geological Potential', 
      points: ['• A diverse range of commodities including precious, base, and industrial metals', 
               '• $12.6 billion in Mineral Production in 2021'] },
    { title: 'Effective Regulations', 
      points: ['• Ranked least risk jurisdiction in 2017 and 2019', 
               '• Seen as a Tier 1 center for geological, financial, environment and social expertise'] },
    { title: 'Lasting Indigenous Partnerships', 
      points: ['• Exploration and mining account for over 2/3 of all Indigenous employment in the sector'] },
    { title: 'Infrastructure For Mining', 
      points: ['• Ocean Ports, Hydroelectric Power, All-season highways'] },
    { title: 'Choice Destination for Responsibility Sources Metals', 
      points: ['• Progressive Climate policies', '• Skilled Labour'] },
    { title: 'In Demand: B.C.’s Abundance of Critical Minerals', 
      points: ['• The province hosts many of the minerals that are projected to be in global high demand'] },
  ];

  const contentRef = useRef([]);

  useEffect(() => {
    contentRef.current.forEach((content, index) => {
      if (content) {
        if (activeAccordion === index) {
          content.style.height = `${content.scrollHeight}px`;
          content.style.padding = '';
          content.style.opacity = '1';
        } else {
          content.style.height = '0';
          content.style.padding = '0';
          content.style.opacity = '0';
        }
      }
    });
  }, [activeAccordion]);

  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
  
    {/* header section */}
    <section className="overview-header-bg flex-row p-12 dsk:px-32 2xl:py-32"
             style={{ marginTop: `${navbarHeight}px` }}>
      <h1 className="text-page-header font-semibold w-full dsk:pt-40 dsk:pb-0 py-24">
        About Western Star
      </h1>
      <p className="pt-20 xl:w-[45%] w-2/3 hidden dsk:block">
      Western Star is an emerging, recently-listed junior mining company that has secured <span className="font-semibold">100%</span> ownership of the high-grade Western Star Project. This venture is situated in the Revelstoke Mining District of British Columbia, Canada, an area known for its abundant mineral resources and a history of successful mining operations.
      </p>
      <a className="hidden dsk:read-more-btn pt-16 pb-40" onClick={() => scrollToElement('goals')}>Read More ▸</a>
    </section>

    <p className="py-20 px-12 dsk:hidden">
      Western Star is an emerging, recently-listed junior mining company that has secured <span className="font-semibold">100%</span> ownership of the high-grade Western Star Project. This venture is situated in the Revelstoke Mining District of British Columbia, Canada, an area known for its abundant mineral resources and a history of successful mining operations.
      </p>

    {/* our goal section */}
    <section id="goals" className="flex-row dsk:pt-24">
      <img src="\assets\overview\goal-section-left.png" className="object-cover object-top dsk:hidden" />
      <h2 className="text-section-header-lg font-semibold mx-12 dsk:mx-32 pt-20 dsk:pt-0">
        Our Goal
      </h2>
      <p className="mt-16 mx-12 dsk:mx-32">
        Western Star is a junior Canadian exploration company which holds a 100% interest in the Western Star Property located near Revelstoke, British Columbia. Our management has a strong track record in the discovery and development of successful exploration projects. The objective is to increase shareholder value through the development of exploration properties, using cost-effective exploration practices, the acquisition of high value exploration properties and seeking partnerships by either joint venture or sale with industry leaders.
      </p>
      <div className="flex gap-8 justify-center items-center w-full xl:h-900[px] h-[600px] mt-32">
        <img src="\assets\overview\goal-section-left.png" className="rounded-2xl max-w-[1100px] w-[55%] h-full object-cover object-top hidden dsk:block" />
        <img src="\assets\overview\goal-section-right.jpg" className="dsk:rounded-2xl w-full dsk:max-w-[900px] dsk:w-[45%] h-full  object-cover object-center" />
      </div>

    </section>

    {/* why revelstoke section */}
    <section className="flex-row mx-12 dsk:mx-32 mt-24 dsk:mt-40 -mb-60 dsk:-mb-48">

      <h2 className="text-section-header-lg font-semibold">
        Why British Columbia?
      </h2>
      <p className="pt-16">
        The Revelstoke Mining District, located within British Columbia, is renowned for its abundant reserves of precious and base metals, including gold, silver, copper, and lead. Western Star's project is situated in a prime location within this district, surrounded by other successful mining operations and well-connected to key infrastructure such as roads, power, and water supply. 
      </p>
      <div className="flex pt-16" style={{alignItems: 'flex-start'}}>
        <div className="flex-col justify-center items-start w-full lg:w-auto hidden dsk:flex">
          <img src="\assets\overview\revelstoke-map.png" className="rounded-3xl min-w-[500px] max-w-[1000px] w-full" alt=""/>
        </div>
        <div className="accordion-container z-10 space-y-8 w-full dsk:ml-16">
          {accordionData.map((accordion, index) => (
            <div className={`accordion p-6 rounded-2xl bg-light-blue text-black cursor-pointer select-none ${activeAccordion === index ? 'active' : ''}`} key={index}
            onClick={() => toggleAccordion(index)}>
              <div className="accordion-title flex justify-between">
                <span className="font-semibold text-content-20">{accordion.title}</span>
                <span className="font-semibold text-content-20 transform scale-150">{activeAccordion === index ? '▴' : '▾'}</span>              
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className="accordion-content text-base font-normal"
              >
                {activeAccordion === index && (
                  <ul className="pl-6 pt-2">
                    {accordion.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="\assets\overview\revelstoke-map.png" className="w-full mt-20 dsk:hidden" alt=""/>
      
    </section>
    </Layout>
  );
};

export default Overview;
