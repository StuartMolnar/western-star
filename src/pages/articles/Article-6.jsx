import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 6;
const article = articles.find((article) => article.id === articleId);


const Article_6 = () => {

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
                Western Star Resources Inc. (CSE: WSR). is pleased to announce the
                closing of the Mount Anderson Property (the “<span className="font-semibold">Property</span>) in the Yukon.
              </p>
              <p className="">
                <span className="font-semibold">Blake Morgan, the CEO of Western Star</span>, stated “The 100% acquisition of the Mount
                Anderson Property is a huge accomplishment. With astonishing assay results from a grab
                sample collected in 2017 <span className="font-semibold">67.5 g/t gold, 2,058 g/t silver, &gt;10.0% lead, 9.44% zinc and
                9.84% copper.</span> The team is thrilled to get started on this road accessible and drill ready asset.
                The company plans to have more news regarding the property shortly”.
              </p>
              <p className="">
                The Mt Anderson Property consists of 163 contiguous quartz claims covering 30 km2
                approximately 60 km south of Whitehorse. The Property is underlain by two intrusive bodies
                including the Early Jurassic Bennett Granite and the Early-mid Cretaceous Whitehorse
                Intrusive suite. The latter is referred to as the Mount Anderson Intrusion. Several roof
                pendants of Nisling Assemblage metasedimentary rocks (Snowcap Group), including
                quartzites and calcareous meta-clastics, outcrop over a significant area of the NE portion of
                the Property.
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
              <p className="ml-4">
                The Company also announces that it has engaged Black Swan Solutions Inc. to provide digital
                media and capital markets communications services. Black Swan is a digital marketing firm that
                will assist with online communications and strategies with the goal of increasing awareness of
                the Company and its projects. The nature and platform of the promotional activity will be digital
                communications on social media platforms such as YouTube, Instagram, TikTok and Twitter. In
                consideration for these services Western Star has agreed to engage Black Swan for a period of
                six-month commencing October 9, 2023, in exchange for 500,000 shares.
              </p>
              <p className="ml-4 underline">
                Derrick Strickland, P. Geo (1000315), a shareholder, and a "Qualified Person" for the purposes
                of National Instrument 43-101 - Standards of Disclosure for Mineral Projects, has reviewed and
                approved the scientific and technical information contained in this news release.
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

export default Article_6;
