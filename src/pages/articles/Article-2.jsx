import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 2;
const article = articles.find((article) => article.id === articleId);


const Article_2 = () => {

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
            News Release / July 20, 2023
          </h2>
          <div className="pb-6 pt-12 space-y-4">
            <p className="">
              Western Star Resources Corp (CSE:WSR) (the “Company” or “Western
              Star”) is pleased to announce that it has entered into an agreement (the “Agreement”) to
              acquire (the “Acquisition”) the Toad River Copper-Cobalt property (the “Property”) located
              in the Peace River North area of British Columbia. The Property is located 56km south of
              Muncho Lake (Alaska Highway) and 16km west of the historically producing Churchill
              Copper Mine.
            </p>
            <p className="">
              Property highlights<sup>[1]</sup>:
              <ol className="list-disc ml-8">
                <li className="pl-2">Assays of 15.60 % and 14.80% Copper;</li>
                <li className="pl-2">Measured 730 meters of known strike length</li>
                <li className="pl-2">Copper Mineralization Chalcopyrite Bornite; and</li>
                <li className="pl-2">Possible Erythrite (a Hydrous cobalt arsenate)</li>
              </ol>
            </p>
            <p className="">
              Blake Morgan, the CEO and President of Western Star, stated “The 100% acquisition of the
              Toad River Copper-Cobalt Property is a huge accomplishment and a move in the right
              direction for the Company. The 730 meters of strike length and the identification of copper
              and cobalt minerals indicate that a much larger mineralized system is proximal. With
              extremely high-grade copper values on this asset, our team is going to crunch the data and
              then work to get crews on the ground to follow up on these numbers. With the demand for
              copper set to outstrip supply, I am looking forward to beginning exploration for cobalt and
              copper on the Property.”
            </p>
            <p className="">
              The Property hosts approximately 730 meters in length of dissentious vein type copper
              mineralization, in the form of Chalcopyrite, Bornite, and Pyrite within the Proterozoic rocks of
              the Aida formation.
            </p>
            <p className="">
              In 1970 Canadian Superior Exploration Limited collected fifteen (15) continuous chip
              samples across various sections of the mineralized veins. Their copper assay values, along
              with the sample widths, are given below1:
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
              commercial production
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

            <p className="">
              This news release contains certain forward-looking statements that are “forward looking
              information” within the meaning of applicable securities laws. All statements that are not historical
              facts, including without limitation, statements regarding future estimates, plans, programs,
              forecasts, projections, objectives, assumptions, expectations or beliefs of future performance,
              including statements respecting the potential existence of a larger mineralized system on the
              Property, future exploration programs on the Property and their results, the future demand for
              copper, the terms of the Agreement, the completion of the Acquisition, and statements respecting
              the vesting and exercise of the Options are “forward-looking information”. These forward-looking
              statements reflect the expectations or beliefs of management of the Company based on
              information currently available to it. Forward-looking statements are subject to a number of risks
              and uncertainties, including those detailed from time to time in filings made by the Company with
              securities regulatory authorities, which may cause actual outcomes to differ materially from those
              discussed in the forward-looking statements. These factors should be considered carefully and
              readers are cautioned not to place undue reliance on such forward-looking statements. The
              forward-looking statements and information contained in this news release are made as of the date hereof and the Company undertakes no obligation to update publicly or revise any forward-
              looking statements or information, whether as a result of new information, future events or
              otherwise, unless so required by applicable securities laws.
            </p>
            
            <div className="pt-6">
              <div class="p-2 bg-white border-t border-black">
                <p class="text-sm"><sup>1</sup><span className="font-semibold">Cautionary Note:</span> A qualified person has not done sufficient work to classify the historical estimate as current mineral resources or mineral reserves and the Company is not treating the historical estimate as current mineral resources or mineral reserves. Further work, including drilling, is required to verify the historical estimate as current mineral resources or mineral reserves.</p>
              </div>
            </div>
          </div>
     
        </section>
      </Layout>
    </>
  );
};

export default Article_2;
