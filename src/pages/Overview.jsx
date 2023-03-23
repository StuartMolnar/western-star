import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import '../styles/overview.css';

const Overview = () => {
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
      points: ['• Progressive Climate policies', 'Skilled Labour'] },
    { title: 'In Demand: B.C.’s Abundance of Critical Minerals', 
      points: ['• The province hosts many of the minerals that are projected to be in global high demand'] },
  ];

  const contentRef = useRef([]);

  useEffect(() => {
    contentRef.current.forEach((content, index) => {
      if (content) {
        if (activeAccordion === index) {
          content.style.height = `${content.scrollHeight}px`;
          content.style.padding = ''; // Reset padding to default
          content.style.opacity = '1';
        } else {
          content.style.height = '0';
          content.style.padding = '0';
          content.style.opacity = '0';
        }
      }
    });
  }, [activeAccordion]);

  

  return (
    <Layout>
  
    {/* header section */}
    <section className="overview-header-bg flex-row px-32 2xl:py-32">
      <h1 className="text-page-header font-semibold w-1/2 pt-40 ">
        About Western Star
      </h1>
      <p className="pt-20 xl:w-[35%] w-1/2">
        Western Star is a newly listed, tightly held junior mining company that has 100% ownership in the high-grade Western Star Project located in the Revelstoke Mining District of British Columbia.
      </p>
      <div className="read-more-btn pt-16 pb-40">Read More ▸</div>
    </section>

    {/* our goal section */}
    <section className="flex-row mx-32 mt-24">
      <h2 className="text-section-header-lg font-semibold">
        Our Goal
      </h2>
      <p className="mt-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet quam nunc. Vivamus libero felis, ornare quis ipsum in, aliquet placerat lectus. Nullam maximus lectus non risus tempor pharetra. Sed eu ultricies ligula, tincidunt laoreet dolor. Sed rutrum ut est sed gravida. Morbi efficitur augue a porttitor iaculis. Mauris lobortis ut arcu a suscipit. Etiam sodales in lectus vitae lobortis. Nullam et eros sapien. Duis at eleifend nunc. Suspendisse potenti. Suspendisse hendrerit quam pharetra magna sollicitudin vulputate. Proin sed enim augue. 
      </p>
      <div className="flex gap-8 justify-center items-center w-full xl:h-900[px] h-[600px] mt-32">
        <img src="src\assets\overview\goal-section-left.png" className="rounded-2xl w-[55%] h-full object-cover object-top" />
        <img src="src\assets\overview\goal-section-right.jpg" className="rounded-2xl w-[45%] h-full  object-cover object-center" />
      </div>

    </section>

    {/* why revelstoke section */}
    <section className="flex-row m-32">

      <h2 className="text-section-header-lg font-semibold">
        Why Revelstoke, British Columbia?
      </h2>
      <p className="pt-16">
        The Revelstoke Mining District, located within British Columbia, is renowned for its abundant reserves of precious and base metals, including gold, silver, copper, and lead. Western Star's project is situated in a prime location within this district, surrounded by other successful mining operations and well-connected to key infrastructure such as roads, power, and water supply. 
      </p>
      <div className="flex pt-16" style={{alignItems: 'flex-start'}}>
        <div className="flex flex-col justify-center items-start w-full lg:w-auto">
          <img src="src\assets\overview\revelstoke-map.png" className="rounded-3xl min-w-[500px] max-w-[1000px] w-full" alt=""/>
        </div>
        <div className="accordion-container space-y-8 w-full ml-16">
          {accordionData.map((accordion, index) => (
            <div className={`accordion p-6 rounded-2xl bg-light-blue text-black cursor-pointer ${activeAccordion === index ? 'active' : ''}`} key={index}>
              <div className="accordion-title select-none flex justify-between"
                onClick={() => toggleAccordion(index)}>
                <span className="font-semibold text-content-20">{accordion.title}</span>
                <span className="font-semibold text-content-20 transform scale-150">{activeAccordion === index ? '▴' : '▾'}</span>              
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className="accordion-content text-base font-normal"
              >
                {activeAccordion === index && (
                  <ul>
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

    </section>
    </Layout>
  );
};

export default Overview;
