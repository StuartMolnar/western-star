import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 5;
const article = articles.find((article) => article.id === articleId);


const Article_5 = () => {

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
              News Release / October 3, 2023
            </h2>
            <div className="pb-6 pt-12 space-y-4">
              <p className="">
                Western Star Resources Inc (CSE: WSR) (the “<span className="font-semibold">Company”</span> or “<span className="font-semibold">Western Star</span>”) is
                pleased to announce that it has entered into an agreement (the “<span className="font-semibold">Agreement”</span>) to acquire (the
                “<span className="font-semibold">Acquisition”</span>) the Mount Anderson Property (the “<span className="font-semibold">Property</span>") in the Yukon.
              </p>
              <p className="">
                The Mt. Anderson is 163 contiguous quarts claims covering 30 km2 that is approximately 60 km south
                of Whitehorse. The Property is underlain by two intrusive bodies including the Early Jurassic Bennett
                Granite and the Early-mid Cretaceous Whitehorse Intrusive suite. The latter is referred to as the
                Mount Anderson Intrusion. Several roof pendants of Nisling Assemblage metasedimentary rocks
                (Snowcap Group), including quartzites and calcareous meta-clastics, outcrop over a significant area
                of the NE portion of the Property.
              </p>
              <p className="">
                Several historical prospects be identified on the Property
              </p>
              <p className="">
                <ol className="list-disc ml-8 space-y-2">
                  <li className="pl-6">
                    The Adanac Zone is a continuous galena vein ranging from 0.1 to 0.4m in width, within strongly
                    limonitic and moderately azurite-bearing granodioritic host rock. Sample results from a 15m by 0.9-metre
                    pit averaged 62.2 g/t Au and 171.1 g/t Ag
                  </li>
                  <li className="pl-6">
                    The EPI Zone is a northeast-trending quartz-agate-fluoride epithermal vein roughly 1.0 metre in
                    width within a 50-metre-long limonite and manganese-bearing shear zone.
                  </li>
                  <li className="pl-6">
                    The Ridge Zone is broad area of quartz-galena veining, returned up to 6.273 opt gold and 15.21
                    opt silver. Mineralized float was found in all trenches and anomalous values were returned from the soil
                    sampling program
                  </li>
                  <li className="pl-6">
                    The Rob Skarn mineralization consists of sulphide-rich garnet actinolite-calc-silicate skarn with
                    up to 5% pyrite and pyrrhotite and trace chalcopyrite.
                  </li>
                  <li className="pl-6">
                    The e Fleming Zn-Pb-Cu-Ag-(Au) skarn mineralization occurs as lenticular zones comprised of
                    pyrrhotite-chalcopyrite- pyrite galena associated with massive magnetite and specular hematite-in a
                    gangue of quartz, calcite, epidote,
                  </li>
                  <li className="pl-6">
                    47 Target Zone with three mineralized quartz veins in a shear zone ~ 30 m long and 5 metres wide
                  </li>
                </ol>
              </p>

              <p className="">
                <span className="font-semibold">Blake Morgan, the CEO and President of Western Star, stated</span> “The 100% acquisition of the
                Mount Anderson Property is a huge accomplishment. Given the recent market conditions Western
                Star was able to pick up an absolute bargain in a well establish mining district. The asset is near drill
                ready with multiple high-grade zones. The team at Western Star is thrilled to get started on such an
                outstanding project. We will have some more information regarding the asset shortly.”
              </p>
            </div>

            <h2 className="text-section-header-lg font-semibold">
              Terms of the Acquisition
            </h2>

            <div className="py-6 space-y-4">
              <p className="">
                Pursuant to the Agreement, the Company will acquire the Mount Anderson Property through a 100%
                acquisition, the Company will issue an aggregate of 1,000,000 common shares in the capital of the
                Company (each, a “<span className="font-semibold">Common Share</span>”) to the Vendors and grant a 1% NSR royalty in respect of commercial
                production from the Property.
              </p>
            </div>

            <h2 className="text-section-header-lg font-semibold">
              Additional Information
            </h2>

            <div className="py-6 space-y-4">
              <p className="">
                Western Star is a mineral exploration and development company. The Company's objective is to increase
                shareholder value through the development of exploration properties using cost-effective exploration
                practices, acquiring further exploration properties, and seeking partnerships by either joint venture or sale
                with industry leaders. The Company currently owns nine non-surveyed contiguous mineral claims totalling
                2,797 hectares, which are located within the Revelstoke mining division of British Columbia. The Western
                Star property group is located approximately 50 kilometres southeast of Revelstoke, B.C., and roughly 10
                kilometres north of the abandoned community of Camborne. Access to the Camborne area is via paved
                highway from either Revelstoke or Nakusp. Access to the property area is best via helicopter from
                Revelstoke or Nakusp.
              </p>
              
              <p className="">
                Additional information about the Company is available on SEDAR at <a href="https://www.sedar.com" className="text-blue-600 hover:text-gold hover:cursor-pointer"> www.sedar.com</a> under the Company's profile. 
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

              <p className="italic font-semibold">
                Neither the Canadian Securities Exchange nor its Regulation Services Provider (as that term
                is defined in the policies of the Canadian Securities Exchange) accepts responsibility for the
                adequacy or accuracy of this press release.
              </p>

              <p className="">
                This news release contains certain forward-looking statements that are “forward looking information” within
                the meaning of applicable securities laws. All statements that are not historical facts, including without
                limitation, statements regarding future estimates, plans, programs, forecasts, projections, objectives,
                assumptions, expectations or beliefs of future performance, including statements respecting the potential
                existence of a larger mineralized system on the Property, future exploration programs on the Property and
                their results, the future demand for copper, the terms of the Agreement, the completion of the Acquisition,
                and statements respecting the vesting and exercise of the Options are “forward-looking information”. These
                forward-looking statements reflect the expectations or beliefs of management of the Company based on
                information currently available to it. Forward-looking statements are subject to a number of risks and
                uncertainties, including those detailed from time to time in filings made by the Company with securities
                regulatory authorities, which may cause actual outcomes to differ materially from those discussed in the
                forward-looking statements. These factors should be considered carefully and readers are cautioned not to
                place undue reliance on such forward-looking statements. The forward-looking statements and information
                contained in this news release are made as of the date hereof and the Company undertakes no obligation
                to update publicly or revise any forward-looking statements or information, whether as a result of new
                information, future events or otherwise, unless so required by applicable securities laws.
              </p>
            </div>
         </section>
      </Layout>
    </>
  );
};

export default Article_5;
