import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 3;
const article = articles.find((article) => article.id === articleId);


const Article_3 = () => {

  const [navbarHeight, setNavbarHeight] = useState(0); 


  return (
    <>    
      <HelmetProvider>
          <Helmet>
          <meta name="robots" content="noindex"></meta>
          </Helmet>
      </HelmetProvider>
      <Layout setNavbarHeight={setNavbarHeight}>

        <ArticleHeader navbarHeight={navbarHeight} article={article} />

        {/* content section */}
        <section id="article-content" className="article-content p-12 dsk:px-32 bg-white text-black">
          <h2 className="text-section-header-lg font-semibold">
              News Release / August 24, 2023
            </h2>
            <div className="pb-6 pt-12 space-y-4">
              <p className="">
                Western Star Resources Inc. (WSR-CSE). is pleased to announce the
                closing of the Toad River Copper-Cobalt Property located Peace River North area of British
                Colombia. The Toad River Copper Property is located 56km south of Muncho Lake (Alaska
                Highway) and 16 kms west of Historically producing Churchill Copper Mine.
              </p>
              <p className="">
                Blake Morgan, the CEO and President of Western Star, stated “With the Toad River
                Acquisition now complete, Western Star will continue to crunch the data. With 730 meters
                of known strike length and the identification of copper and cobalt minerals clearly indicates
                that a much larger mineralized system is proximal. With extremely high copper values on
                this asset, we look forward to getting crews on the ground to follow up these numbers. With
                the demand for copper set to outstrip supply, we are looking forward to beginning the
                exploration for cobalt and copper.”
              </p>
              <p className="">
                <ol className="list-disc ml-8">
                  <li className="pl-2">Assays of 15.60 % and 14.80% Copper;</li>
                  <li className="pl-2">Measured 730 meters of known strike length</li>
                  <li className="pl-2">Copper Mineralization Chalcopyrite Bornite; and</li>
                  <li className="pl-2">Possible Erythrite (a Hydrous cobalt arsenate)</li>
                </ol>
              </p>
              <p className="">
                The Property hosts approximately 730 meters in length of dissentious vein type copper
                mineralization, in the form of Chalcopyrite, Bornite, and Pyrite within the Proterozoic rocks of
                the Aida formation.
              </p>
              <p className="">
                In 1970 Canadian Superior Exploration Limited collected Fifteen (15) continuous chip
                samples were taken across various sections of the mineralized veins, and their copper
                assay values, along with the sample widths, are given below:
              </p>
              <div className="py-4">
                <table class="w-full border border-black max-w-[320px] mx-auto">
                  <thead>
                    <tr>
                      <th class="border border-black p-1 text-left">Sample No</th>
                      <th class="border border-black p-1 text-left">Meters</th>
                      <th class="border border-black p-1 text-left">Cu %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 1</td>
                      <td class="border border-black p-1 text-left">1.34</td>
                      <td class="border border-black p-1 text-left">4.10</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 2</td>
                      <td class="border border-black p-1 text-left">1.16</td>
                      <td class="border border-black p-1 text-left">2.40</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left font-semibold">ME- 3</td>
                      <td class="border border-black p-1 text-left">0.15</td>
                      <td class="border border-black p-1 text-left font-semibold">13.80</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 4</td>
                      <td class="border border-black p-1 text-left">0.43</td>
                      <td class="border border-black p-1 text-left">7.40</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 5</td>
                      <td class="border border-black p-1 text-left">0.30</td>
                      <td class="border border-black p-1 text-left">4.80</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 6</td>
                      <td class="border border-black p-1 text-left">1.01</td>
                      <td class="border border-black p-1 text-left">8.20</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 7</td>
                      <td class="border border-black p-1 text-left">0.61</td>
                      <td class="border border-black p-1 text-left">1.07</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 8</td>
                      <td class="border border-black p-1 text-left">0.55</td>
                      <td class="border border-black p-1 text-left">5.45</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME- 9</td>
                      <td class="border border-black p-1 text-left">0.85</td>
                      <td class="border border-black p-1 text-left">2.70</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME-10</td>
                      <td class="border border-black p-1 text-left">0.18</td>
                      <td class="border border-black p-1 text-left">1.98</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left font-semibold">ME-11</td>
                      <td class="border border-black p-1 text-left">0.61</td>
                      <td class="border border-black p-1 text-left font-semibold">15.60</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left font-semibold">NE-12</td>
                      <td class="border border-black p-1 text-left">1.13</td>
                      <td class="border border-black p-1 text-left font-semibold">14.80</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME-I3</td>
                      <td class="border border-black p-1 text-left">0.30</td>
                      <td class="border border-black p-1 text-left">2.40</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME-14</td>
                      <td class="border border-black p-1 text-left">0.30</td>
                      <td class="border border-black p-1 text-left">5.35</td>
                    </tr>
                    <tr>
                      <td class="border border-black p-1 text-left">ME-15</td>
                      <td class="border border-black p-1 text-left">0.67</td>
                      <td class="border border-black p-1 text-left">1.55</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="">
                WESTERN STAR RESOURCES INC. 615 – 800 West Pender Street Vancouver, B.C. V6C 2V6
                The veins occur as discontinuous, lens-shaped pods of variable dimensions with widths between
                15- to 90- cementers and lengths of less than 25 meters. Situated primarily along the northwest
                margin of a steeply dipping, northeast-striking dyke which transects a number of north trending
                dykes.
              </p>
              <p className="">
                The mineralization consists principally of chalcopyrite with minor amounts of pyrite, bornite,
                malachite and erythrite, and occurs within the veins in association with quartz, carbonate
                (ankerite?), and sedimentary rock inclusions. Chalcopyrite appears as blebs, clusters, and
                pockets as well as lenses within the veins, and primarily in association with the rock inclusions.
              </p>
              <p className="">
                The Company has now acquired 100% of the two mineral titles totaling 2,202.15 ha for one time
                issuance of 5,000,000 shares to the Vendors. The Property has 1% Royality in returns on
                commercial production.
              </p>
              <p className="">
                Derrick Strickland, P.Geo. (1000315). a Qualified Person defined by National Instrument 43-101
                and shareholder has reviewed and approved the technical information in this press releases.
              </p>
              <p className="">
                “The company announces the resignation of David Johnson as a Director of Western Star
                Resources Inc. The company wishes to thank Mr. Johnson for his contributions to the company
                and wishes him success on his new endeavors.”
              </p>
              

            </div>

            <h2 className="text-section-header-lg font-semibold">
              Additional Information
            </h2>

            <div className="py-6 space-y-4">
              <p className="">
                Additional information about the Company and the Transaction is available on SEDAR at 
                <a href="https://www.sedar.com" className="text-blue-600 hover:text-gold hover:cursor-pointer"> www.sedar.com</a> under the Company's profile. The summary of the Transaction set out above is
                qualified in its entirety by reference to the description of the Transaction in the Company's filing
                statement posted on SEDAR.
              </p>
              <p className="">
                "Western Star Resources is a mineral exploration and development company. The company's
                objective is to increase shareholder value through the development of exploration properties
                using cost-effective exploration practices, acquiring further exploration properties, and seeking partnerships by either joint venture or sale with industry leaders. The company currently owns
                nine non-surveyed contiguous mineral claims totalling 2,797 hectares, which are located within
                the Revelstoke mining division of British Columbia. The Western Star property group is located
                approximately 50 kilometres southeast of Revelstoke, B.C., and roughly 10 kilometres north of
                the abandoned community of Camborne. Access to the Camborne area is via paved highway
                from either Revelstoke or Nakusp. Access to the property area is best via helicopter from
                Revelstoke or Nakusp."
              </p>
            </div>
            
            <h2 className="text-section-header-lg font-semibold">
              Contact Information
            </h2>

            <div className="py-6 space-y-4">
              <p className="">
                Blake Morgan, CEO and Director
              </p>
              <a href="mailto:blake@avcv.vc" className="text-blue-600 hover:text-gold hover:cursor-pointer">blake@acvc.vc</a>

              <p className="italic text-footer font-semibold">
                Neither the Canadian Securities Exchange nor its Regulation Services Provider (as that term
                is defined in the policies of the Canadian Securities Exchange) accepts responsibility for the
                adequacy or accuracy of this press release.
              </p>

              <p className="italic text-footer">
                Certain of the statements made and information contained herein may constitute "forward-looking information." In
                particular references to the private placement and future work programs or expectations on the quality or results of
                such work programs are subject to risks associated with operations on the property, exploration activity generally,
                equipment limitations and availability, as well as other risks that we may not be currently aware of. Accordingly,
                readers are advised not to place undue reliance on forward-looking information. Except as required under applicable
                securities legislation, the Company undertakes no obligation to publicly update or revise forward-looking information,
                whether as a result of new information, future events or otherwise.
              </p>
            </div>
         </section>
      </Layout>
    </>
  );
};

export default Article_3;
