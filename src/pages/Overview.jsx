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

    <section className="flex">

      <div className="flex flex-col justify-center items-center w-3/5 ml-32">h</div>

      <div className="accordion-container space-y-4 w-full mx-32">
      {accordionData.map((accordion, index) => (
  <div className={`accordion p-6 rounded-2xl bg-light-blue text-black ${activeAccordion === index ? 'active' : ''}`} key={index}>
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


    </section>
    </Layout>
  );
};

export default Overview;
