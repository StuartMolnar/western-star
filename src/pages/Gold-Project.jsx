import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import { useScrollContext } from '../App'; 



const GoldProject = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);
  const scrollToElement = useScrollContext();

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
    {/* header section */}
    <section className="projects-header-bg flex-row px-5 dsk:px-32 2xl:py-32"
            style={{ marginTop: `${navbarHeight}px` }}>
      <h1 className="text-page-header font-semibold w-full dsk:pt-40 dsk:pb-0 py-24">
        The Western Star Project
      </h1>
      <p className="pt-20 xl:w-[45%] w-2/3 hidden dsk:block">
        The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
      </p>
      <a onClick={() => scrollToElement('overview')} className="hidden dsk:read-more-btn pt-16 pb-32">Read More ▸</a>
    </section>

    
    <p className="py-12 px-5 dsk:hidden">
        The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
      </p>

    {/* overview section */}
    <section id="overview" className="flex-row mx-5 dsk:mx-32">
        <h2 className="text-section-header-lg font-semibold dsk:pt-24">
            Overview
        </h2>
        <div className="flex-row dsk:flex w-full gap-8 dsk:space-y-0 space-y-8 pt-12">
            <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 dsk:p-12">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Location
                </h3>
                <ul className="list-disc list-outside text-black pt-8 space-y-4">
                    <li>The Western Star Property consists of 9 non-surveyed contiguous mineral claims totalling 2,797.69. hectares located approximately 50km southeast of Revelstoke, BC</li>
                    <li>Access to the Property area is via helicopter from Revelstoke or Nakusp</li>
                </ul>
            </div>
            <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 dsk:p-12">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Regional Geology
                </h3>
                <ul className="list-disc list-outside text-black pt-8 space-y-4">
                    <li>The Kootenay Terrane is an arc-shaped belt of stratigraphy spanning 400 km.</li>
                    <li>It has correlating stratigraphy and is 10-50 km wide.</li>
                    <li>The trend is observed from Washington State to British Columbia.</li>
                    <li>The belt width varies, but generally stays within 10-50 km.</li>
                </ul>

            </div>
            <div className="flex-row dsk:w-1/3 bg-white rounded-2xl p-8 dsk:p-12">
                <h3 className="text-section-subheader font-semibold text-gold">
                    History & Mineralization
                </h3>
                <ul className="list-disc list-outside text-black pt-8 space-y-4">
                    <li>Mining records from 1895-1915 show sigificant mining history.</li>
                    <li>Historic mineralization is described as veins ranging from 1 to 10m wide.</li>
                    <li>Mineralization has been traced intermittently over strike lengths up to 6.2km.</li>
                </ul>
            </div>
        </div>

    </section>

    {/* info section */}
    <img src="/assets/gold-project/info-section-right.webp" className="info-section-img pt-12 object-cover object-center dsk:hidden"></img>
    <section className="info-section flex dsk:py-32 text-black dsk:min-h-[800px]">
        
    <div className="dsk:w-[65%] bg-light-blue flex items-center justify-center">
        <p className="p-8 py-12 dsk:p-32">
            Recently discovered mineralization consists of <span className="font-semibold">galena-sphalerite-chalcopyrite</span> in concordant to irregular quartz-chlorite veins in shears at the limestone phyllite contact and in fractured and/or brecciated ankeritic limestone.  Select rock samples returned up to <span className="font-semibold">8.22 g/t gold, 246.76 g/t silver, 3.68% copper</span>, and <span className="font-semibold">50.1% lead</span>.
        </p>
    </div>
    <img src="/assets/gold-project/info-section-right.webp" className="info-section-img dsk:w-[35%] object-cover object-center hidden dsk:block"></img>
    {/* <img src="src\assets\gold-project\info-section-right.webp" alt="" className="w-full max-w-[800px] object-cover object-center" /> */}
</section>


    {/* exploration section */}
    <section className="exploration-section dsk:flex-row pt-12 dsk:pt-0 dsk:mx-32">
        <h2 className="text-section-header-lg font-semibold mx-5 dsk:mx-0">
            Exploration
        </h2>
        <div className="overflow-x-auto mx-2 dsk:mx-0">
            <div className="pt-12 dsk:pt-16 w-full min-w-[1100px] dsk:min-w-0">
                <div className="grid grid-cols-11 text-gold font-semibold">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">Sample ID</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Description</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">Au g/t</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">Ag g/t</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">CH-LC-01</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Representative grab sample of 0.5 to 1.5-meter wide quartz-sericite-chlorite vein containing traces of malachite staining (bedding plane fault).</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">2.04</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">40954</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Sulphide lens 2 inches wide near northeast contact.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">8.22</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">264.76</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">GR-LX87-02</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite mineralization within siderite-ankerite.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">1.78</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">3.0</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">DN-011</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample 1-2 m wide quartz vein. Note: 0.07% copper.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">1.81</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">0.17</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">34993</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample from dump at portal of Scout Adit, massive white quartz with coarse grained galena-pyrite.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">2.61</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">3.2</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">20021</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite mineralization within siderite-ankerite alteration zone.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">16953</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample of quartz-siderite fracture filling with galena, sphalerite, tetrahedrite.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">5.95</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">170.3</div>
                </div>
                <div className="grid grid-cols-11">
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">40951</div>
                    <div className="col-span-8 border border-black p-2 flex items-center px-4">Channel sample across 2.0-meter-wide pyrite-siderite zone.</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">2.21</div>
                    <div className="col-span-1 border border-black p-2 flex items-center px-4">0.07</div>
                </div>
            </div>
        </div>
        
        

    </section>

    {/* map section */}
    <section className="map-section pt-12 dsk:pt-20 dsk:p-32 flex justify-center">
        <img src="\assets\gold-project\map.webp" className="w-full max-w-[1750px] object-cover scale-[1.03] dsk:scale-100" alt="" />
    </section>

    {/* mineralization section */}
    <section className="mineralization-section p-5 pt-12 dsk:pt-32 dsk:p-32 bg-dark-blue flex-row dsk:flex gap-24">
        <div className="floating-rock-image min-w-[250px] flex items-center justify-center scale-75">
            <div>
                <img src="\assets\gold-project\rock.webp" className="animate-rotation max-w-[300px] dsk:max-w-full" alt=""/>
                <p className="text-center pt-20 dsk:scale-[2]">343 ppb Au, 181 g/t Ag, 38.4% Pb</p>
            </div>
        </div>

        <div className="flex-row">
            <h2 className="text-section-header-md font-semibold pt-8 dsk:pt-0 pb-6 dsk:pb-12">
                Mineralization
            </h2>
            <p className="py-2 dsk:py-4">
                Recent exploration indicates that the mineralization is a control of syngenetic distal volcanic Carbonate Replacement Deposit (CDR) mineralization likely to be a combination of structure, lithology, and stratigraphy. There are three main CRD deposit types: Leadville-type mineralization (LTM), sedimentary exhalative (SEDEX) and Mississippi Valley-type (MVT).
            </p>
            <p className="py-2 dsk:py-4">
                The sporadic nature of the known mineralization along the favourable contact zones indicates a complex set of parameters governing mineralization.
            </p>
            <ul className="py-4 pl-12 list-disc list-inside space-y-2">
                <li>Sulphide mineralization is stratiform and occurs at the contact between a grey-green phyllite and a limestone</li>
                <li>The massive chlorite and chloritic quartz that occurs along fractures and at the base of mineralization may be hydrothermal in origin</li>
                <li>The pods of disseminated hematite and magnetite that occur at the mineralized horizon are commonly associated with volcanogenic mineralization</li>
            </ul>
            <p className="py-4">
                Pinch outs of the carbonate bank and dolomitized limestone units at the apparent unconformity can be expected to occur at intervals all along the contact to other units. In this area, the unconformity appears in at least three parallel zones or "leads" on the flanks of large northwest trending folds.
            </p>
            <p className="py-4">
                Preliminary exploration of the Western Star Property indicates good potential for the discovery of additional mineralization along the strike extent of the 6.2km mineralized structures.
            </p>
        </div>
    </section>


    {/* sample images section */}
    <section className="dsk:mx-32 dsk:mt-32 -mb-72">
        <div className="flex-row dsk:flex gap-8 justify-center items-center w-full xl:h-1100[px] dsk:h-[800px]">
            <div className="flex-row dsk:h-full dsk:w-[45%] dsk:max-w-[900px] ">
                
            <img src="\assets\gold-project\images-section-left.webp" className="dsk:rounded-3xl dsk:scale-100 h-[90%] object-cover object-top w-full" />
            <p className="dsk:p-3 p-12 text-center">
                219 g/t Ag, 50.1% Pb 
            </p> 
            </div>    
            <div className="flex-row dsk:h-full dsk:w-[55%] dsk:max-w-[1100px] ">

            <img src="\assets\gold-project\images-section-right.webp" className="dsk:rounded-3xl object-cover object-center w-full h-[90%]" />
            <p className="dsk:p-3 p-12 text-center">
                317 ppb Au, 586 g/t Ag, 6.29% Ag, 2.79% Cu
            </p>
            
            </div>   
        </div>
    </section>

    </Layout>
  );
};

export default GoldProject;
