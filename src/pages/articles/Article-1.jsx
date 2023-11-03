import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 1;
const article = articles.find((article) => article.id === articleId);


const Article_1 = () => {

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
            News Release / March 7, 2023
          </h2>
          <div className="pb-6 pt-12 space-y-4">
            <p className="">
              Western Star Resources Inc. (CSE:WSR) (the "Company"), is announcing the resignation of Anthony Chan, CFO, and Ming Chang, director, of the Company and is pleased to announce the appointment of a new CFO, Monty Sutton, and Director, Justin Corinella.
            </p>
            <p className="">
              Monty Sutton worked most of his career as an Investment Advisor, Equities Trader, and
              Insurance Specialist with PI Financial Corp in Vancouver. During this time, he participated in
              raising over $100mm for junior mining companies and managed over 1,500 client accounts.
            </p>
            <p className="">
              Since leaving PI, Mr. Sutton was the Corporate Development Manager with eCobalt Solutions
              where they raised over $30mm for the companies Idaho Cobalt Project. Mr. Sutton has also been
              working with small private companies in various consulting and advisory roles. Prior to joining
              PI in 1997 Mr. Sutton was a Senior Management Accountant with MacMillan Bloedel preparing
              budgets, analyzing costs, and assisting in the design and implementation of new accounting
              systems.
            </p>
            <p className="">
              Mr. Sutton's first experience in the Investment Industry was a brief stint on the Vancouver Stock
              Exchange Trade Floor in 1987.
            </p>
            <p className="">
              Justin Corinella has a broad background in public markets and corporate financing. His focus is
              on early-stage venture companies with potential for large growth, scalability and value creation.
              Mr. Corinella was the Head of Technology for Squire Mining Ltd., listed on the CSE, and as part
              of the executive team, he participated in raising $28M CAD in financing and developed strategic
              partnerships with key stakeholders in North America, Europe and Asia.
            </p>
            <p className="">
              Mr. Corinella is the inventor and Co-founder of Dahrwin LLC, founded in 2012, a wireless
              technology company based out of New York and raised venture funding, spearheaded software
              & hardware development and received five issued patents. His endeavors have positioned him as
              a lead in multiple R&D and Engineering departments working on various US military and
              government-based technologies.
            </p>
            <p className="">
            We would like to wish Anthony and Ming all the best in their future endeavours.
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
              Blake Morgan,
              <br></br>
              CEO and Director
              <br></br>
              <a href="mailto:blake@avcv.vc" className="text-blue-600 hover:text-gold hover:cursor-pointer">blake@acvc.vc</a>
            </p>
            <p className="font-semibold">
              Neither the Canadian Securities Exchange nor its Regulation Services Provider (as that term
              is defined in the policies of the Canadian Securities Exchange) accepts responsibility for the
              adequacy or accuracy of this press release.
            </p>
            <p className="">
              Certain of the statements made and information contained herein may constitute "forward-
              looking information." In particular references to the private placement and future work
              programs or expectations on the quality or results of such work programs are subject to risks
              associated with operations on the property, exploration activity generally, equipment limitations
              and availability, as well as other risks that we may not be currently aware of. Accordingly,
              readers are advised not to place undue reliance on forward-looking information. Except as
              required under applicable securities legislation, the Company undertakes no obligation to
              publicly update or revise forward-looking information, whether as a result of new information,
              future events or otherwise.
            </p>
            <p className="">
              <span className="font-semibold">SOURCE:</span>  Western Star Resources Inc.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Article_1;
