import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 4;
const article = articles.find((article) => article.id === articleId);


const Article_4 = () => {

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
            News Release / September 12, 2023
          </h2>
          <div className="pb-6 pt-12 space-y-4">
            <p className="">
              Western Star Resources Inc. (CSE:WSR) (“<span className="semi-bold">Western Star</span>” or the
              “<span className="semi-bold">Company</span>”) is pleased to announce that it has entered into an investment and advisory
              agreement (the “<span className="semi-bold">Agreement</span>”) with Crescita Capital LLC (“<span className="semi-bold">Crescita”</span>) pursuant to which
              Crescita will (i) provide certain advisory services (the “<span className="semi-bold">Advisory Services</span>”) to the Company
              and (ii) make available to the Company a non-revolving equity drawdown facility in the
              aggregate amount of up to $5 million (the “<span className="semi-bold">Equity Investment Facility</span>”), representing major
              institutional backing for Western Star.
            </p>
            <p className="">
              Blake Morgan, CEO of Western Star, states “With such a large backing of institutional
              funding at such an early stage, the Agreement and, specifically, the Equity Investment
              Facility shows the confidence in the Western Star management team and assets. This
              funding will give the Company the opportunity to aggressively advance its assets towards a
              maiden drill program. The Company plans to have an update in regard to exploration
              programs, drill permits and drill program very soon.”
            </p>
            
          </div>
          <h2 className="text-section-header-lg font-semibold">
            Equity Investment Facility
          </h2>

          <div className="py-6 space-y-4">
            <p className="">
              The Equity Investment Facility is for an aggregate amount of $5 million and Western Star
              will have three years to utilize the $5 million to expand and develop its assets. Pursuant to
              the Agreement, Western Star can draw down funds from the Equity Investment Facility from
              time to time during the three-year term at Western Star’s discretion by providing a notice to
              Crescita (a “<span className="semi-bold">Drawdown Notice</span>”) and issuing common shares to Crescita in exchange (each
              drawdown, a “<span className="semi-bold">Private Placement</span>”). The shares issued in connection with any Private
              Placement will be priced at 85% of the average closing bid price over the ten days of trading
              following the Drawdown Notice (the “<span className="semi-bold">Pricing Period</span>”). The amount requested in each
              Drawdown Notice cannot exceed 500% of the average daily trading volume of the Pricing
              Period.
            </p>
            <p className="">
              Pursuant to the Agreement, the Company will (i) pay Crescita an up-front commission of
              $250,000, representing 5% of the amount available under the Equity Investment Facility,
              which shall be paid through the issuance of 1,666,666 common shares of the Company at
              a deemed price of $0.15 per share and (ii) issue Crescita 869,800 warrants of the Company,
              representing 5% of Western Star’s current number of outstanding shares, each at an
              exercise price of $0.15 per share for a period of three years (together, the “<span className="semi-bold">Commitment
              Fee</span>”).
            </p>
            <p className="">
              All securities issued to Crescita pursuant to the Agreement will not be subject resale
              restrictions under applicable securities laws and the Company intends to seek a waiver from
              the Canadian Securities Exchange (the “<span className="semi-bold">CSE</span>”) in respect of the 4-month hold period
              required under s. 6.1(4)(a) of CSE Policy 6 Distributions & Corporate Finance.
            </p>
          </div>

          <h2 className="text-section-header-lg font-semibold">
            Advisory Services
          </h2>

          <div className="py-6 space-y-4">
            <p className="">
              Pursuant to the Agreement, the Company has engaged Crescita to provide the Advisory
              Services on an as and when needed basis. The Advisory Services include: (a) advisory
              services with respect to general corporate and public company matters; (b) assistance with
              identifying strategic investment opportunities and mergers and acquisitions for the
              Company, including mineral property acquisitions; (c) assistance with the Company’s business 
              development; and (d) such other services as agreed to by the Company and
              Crescita in writing from time‐to‐time. The Advisory Services provided by Crescita to the
              Company pursuant to the Investment and Advisory Agreement will be on a project specific
              basis and the fees payable in connection with each project will be determined from time to
              time on mutual written agreement of the parties at the outset of the project.
            </p>
            <p className="">
              The transactions contemplated under the Equity Investment Facility, including the payment
              of the Commitment Fee, remain subject to the approval of the CSE and the shareholders of
              the Company pursuant to the policies of the CSE.
            </p>
            <p className="">
              All securities issued to Crescita pursuant to the Agreement will not be subject resale
              restrictions under applicable securities laws and the Company intends to seek a waiver from
              the Canadian Securities Exchange (the “<span className="semi-bold">CSE</span>”) in respect of the 4-month hold period
              required under s. 6.1(4)(a) of CSE Policy 6 Distributions & Corporate Finance.
            </p>
          </div>

          <h2 className="text-section-header-lg font-semibold">
            About Crescita Capital LLC
          </h2>

          <div className="py-6 space-y-4">
            <p className="">
            Crescita Capital is an investment and consultancy group that provides financing and
            corporate development services for growth-stage companies in markets around the world
            (<a href="https://www.crescitacapital.com" className="text-blue-600 hover:text-gold hover:cursor-pointer">www.crescitacapital.com</a>).
            </p>
          </div>

          <h2 className="text-section-header-lg font-semibold">
            About Western Star
          </h2>

          <div className="py-6 space-y-4">
            
            <p className="">
              Western Star Resources is a mineral exploration and development company. The
              company's objective is to increase shareholder value through the development of
              exploration properties using cost-effective exploration practices, acquiring further
              exploration properties, and seeking partnerships by either joint venture or sale with industry
              leaders. The company currently owns nine non-surveyed contiguous mineral claims totalling
              2,797 hectares, which are located within the Revelstoke mining division of British Columbia.
              The Western Star property group is located approximately 50 kilometres southeast of
              Revelstoke, B.C., and roughly 10 kilometres north of the abandoned community of
              Camborne. Access to the Camborne area is via paved highway from either Revelstoke or
              Nakusp. Access to the property area is best via helicopter from Revelstoke or Nakusp.
            </p>
            <p className="">
              Additional information about the Company is available on SEDAR+ at <a href="https://www.sedarplus.com" className="text-blue-600 hover:text-gold hover:cursor-pointer">www.sedarplus.com</a>
              under the Company's profile
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
                Certain of the statements made and information contained herein may constitute "forward-looking
                information." In particular, references to the Agreement, payment of the Commitment Fee, future
                drawdowns under the Agreement, benefits to the Company of the Agreement, the Advisory Services,
                application of the CSE 4-month hold period to securities issued pursuant to the Agreement, the
                approval of the CSE and the shareholders of the Company, and future work programs of the
                Company are subject to risks associated with operations on the property, exploration activity
                generally, equipment limitations and availability, as well as other risks that we may not be currently
                aware of. Accordingly, readers are advised not to place undue reliance on forward-looking
                information. Except as required under applicable securities legislation, the Company undertakes no
                obligation to publicly update or revise forward-looking information, whether as a result of new
                information, future events or otherwise.
              </p>
            </div>
        </section>
      </Layout>
    </>
  );
};

export default Article_4;
