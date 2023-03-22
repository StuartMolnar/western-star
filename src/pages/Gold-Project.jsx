import React from 'react';
import Layout from './Layout';
import '../styles/gold-project.css';


const GoldProject = () => {
    
  return (
    <Layout>
    {/* header section */}
    <section className="header-section-bg flex-row p-32 pt-40">
      <h1 className="text-page-header font-semibold w-1/2">
        The Western Star Project
      </h1>
      <p className="pt-20 xl:w-[35%] w-1/2">
        The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
      </p>
      <div className="read-more-btn pt-16">Read More ▸</div>
    </section>

    {/* overview section */}
    <section className="flex-row mx-32">
        <h2 className="text-section-header-lg font-semibold pt-24">
            Overview
        </h2>
        <div className="flex w-full gap-8 pt-12">
            <div className="flex-row w-1/3 bg-white rounded-2xl p-12">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Location
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>The Western Star Property is in the peri-cratonic southern Kootenay terrane of the Canadian Cordillera.</li>
                    <li>This terrane is an arc-shaped region in southeastern Canada.</li>
                </ul>
            </div>
            <div className="flex-row w-1/3 bg-white rounded-2xl p-8">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Surface Area
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>The Kootenay Terrane is an arc-shaped belt of stratigraphy spanning 400 km.</li>
                    <li>It has correlating stratigraphy and is 10-50 km wide.</li>
                    <li>The trend is observed from Washington State to British Columbia.</li>
                    <li>The belt width varies, but generally stays within 10-50 km.</li>
                </ul>

            </div>
            <div className="flex-row w-1/3 bg-white rounded-2xl p-8">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Geology & Mineralization
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>Mining records from 1895-1915 showed exploration of Western Star Property prospects.</li>
                    <li>These prospects are described as veins ranging from 1 to 10m wide.</li>
                    <li>They were traced intermittently over strike lengths up to 6.2km.</li>
                    <li>The records were obtained from the Ministry of Mines Annual Review (MMAR).</li>
                </ul>
            </div>
        </div>

    </section>

    {/* exploration section */}
    <section className="exploration-section flex-row mx-32 py-32">
        <h2 className="text-section-header-lg font-semibold">
            Exploration
        </h2>
        <div className="pt-16">
            <div className="grid grid-cols-11 text-gold font-semibold">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Sample ID</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Description</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Au g/t</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Ag g/t</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">CH-LC-01</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Representative grab sample of 0.5 to 1.5-meter wide quartz-sericite-chloritevein containing traces of malachite staining (bedding plane fault).</div>
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
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite min within siderite-ankerite.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">1.78</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">3.0</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">DN-011</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">ConGrab sample 1-2 m wide quartz vein. Note: 0.07% copper.tent</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">1.81</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">0.17</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">34993</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample from dump at portal of Scout Adit, massive white quartz with coarsegrained galena, pyrite.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">2.61</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">3.2</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">20021</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite min within siderite-ankerite alteration zone.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">16953</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample of quartz-siderite fracture filling with galena, sphalerite,tetrabedrite.</div>
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
        

    </section>

    </Layout>
  );
};

export default GoldProject;
