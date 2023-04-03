import React, { useState, useRef } from 'react';
import Layout from './Layout';
import '../styles/legal.css';
import { useScrollContext } from '../App'; 

const Legal = () => {
  const scrollToElement = useScrollContext();
    
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
      <Layout setNavbarHeight={setNavbarHeight}>

    {/* header section */}
    <section className="legal-section-bg px-12 dsk:px-32 py-24 dsk:py-32 2xl:py-48"
            style={{ marginTop: `${navbarHeight}px` }}>
        <h1 className="text-page-header font-semibold">
            Legal & Privacy
        </h1>
        <a onClick={() => scrollToElement('legal-section')} className="hidden dsk:read-more-btn pt-16">Read More ▸</a>
        
    </section>

    {/* legal section */}
    <section className="legal-section px-12 dsk:px-32 py-16 dsk:py-24 bg-white text-black">
        <div className="flex-col space-y-8 dsk:space-y-12">
            <h2 className="text-card-header font-semibold">
                Forward-Looking Statements
            </h2>
            <p>
                This website may contain certain forward-looking statements and forward-looking information (collectively, “forward-looking statements”) within the meaning of applicable Canadian securities legislation. Often, but not always, forward looking information can be identified by words such as “pro forma”, “plans”, “expects”, “may”, “should”, “budget”, “scheduled”, “estimates”, “forecasts”, “intends”, “anticipates”, “believes”, “potential” or variations of such words including negative variations thereof, and phrases that refer to certain actions, events or results that may, could, would, might or will occur or be taken or achieved. Forward-looking statements involve known and unknown risks, uncertainties and other factors which may cause the actual results, performance, or achievements of the Company to differ materially from any future results, performance or achievements expressed or implied by the forward-looking statements. Such risks and other factors include, among others, risks related to the anticipated business plans and timing of future activities of the Company, including the Company’s exploration plans and the proposed expenditures for exploration work thereon, the ability of the Company to obtain sufficient financing to fund its business activities and plans, delays in obtaining governmental and regulatory approvals (including of the Canadian Securities Exchange) for the Earn-In Agreements and the proposed equity financing, the risk that the equity financing will not be completed or on the anticipated timetable, the risk that Newcrest will not elect to obtain any additional interest in the projects in excess of the Minimum Commitment, the ability of the Company to obtain the required permits, changes in laws, regulations and policies affecting mining operations, the Company’s limited operating history, currency fluctuations, title disputes or claims, environmental issues and liabilities, as well as those factors discussed under the heading “Risk Factors” in the Company’s prospectus dated October 25, 2022 and other filings of the Company with the Canadian Securities Authorities, copies of which can be found under the Company’s profile on the SEDAR website at www.sedar.com. Readers are cautioned not to place undue reliance on forward-looking statements. 

                The Company undertakes no obligation to update any of the forward-looking statements, except as otherwise required by law.
            </p>

            <hr className="border-black opacity-25"/>

            <h2 className="text-card-header font-semibold">
                Investement Decisions
            </h2>
            <p>
                MATERIAL CONTAINED IN THIS WEBSITE IS FOR INFORMATION PURPOSES ONLY AND IS NOT INTENDED TO CONSTITUTE AN OFFERING OF SECURITIES IN ANY JURISDICTION.

                The information provided in this website is not intended to qualify, amend, modify or supplement Western Star’s continuous disclosure documents. Readers are directed to obtain official copies of the company’s continuous disclosure documents at www.sedar.com. The information provided by this website should not be used for the purpose of making investment decisions. If you are contemplating trading in Headwater securities, you should contact the company to obtain printed copies of the documents you wish to review.

                The information and materials available on this website are not intended to provide specific legal, accounting, financial, investing or tax advice to any user. Any decisions you make based on information contained in this website are your sole responsibility. The documents and information available on this website are provided as a convenience only and where any documents on this website have been filed in accordance with applicable securities laws, such documents are not the official versions of Headwater’s continuous disclosure documents. No information contained in this website constitutes or should be deemed to constitute an invitation to invest or otherwise deal in the securities of Western Star.
            </p>

            
            <hr className="border-black opacity-25"/>

            <h2 className="text-card-header font-semibold">
                Limitation of Liability
            </h2>
            <p>
                Western Star Resources Inc. is not liable for any direct, indirect, special, incidental or consequential damages arising out of the use of or the inability to use this Site or its Content, whether based on breach of contract, breach of warranty, tort (including negligence), product liability or otherwise. This includes but is not limited to the loss of data or loss of profit, litigation or due to business interruption, even if Western Star Resources Inc. or an authorized representative was advised of the possibility of such damages. The negation of damages set forth above are fundamental elements of the basis of the agreement between Western Star Resources Inc. and all Site users. This Site would not be provided without such limitations.
            </p>

            <h3 className="section-subheader font-semibold">
                Revisions and Errata
            </h3>

            <p>
                The materials appearing on this Site may include technical, typographical or photographic errors. Western Star makes no warranty that the materials on this Site are accurate, current or complete. Headwater reserves the right to edit or remove any documents, photos, information or other content without notice.
            </p>

            <h3 className="section-subheader font-semibold">
                Jurisdiction
            </h3>

            <p>
                Any claim relating to this Site shall be governed by the laws of British Columbia, Canada without regard to its conflict of law provisions. 
            </p>

            <p>                
                Certain disclosure may constitute “forward-looking statements” within the meaning of Canadian securities legislation. In making the forward-looking statements, the Company has applied certain factors and assumptions that the Company believes are reasonable. However, the forward-looking statements are subject to numerous risks, uncertainties and other factors that may cause future results to differ materially from those expressed or implied in such forward-looking statements. Such uncertainties and risks are described from time to time in the Company’s filings with the appropriate securities commissions, and may include, among others, market conditions, delays in obtaining or failure to obtain required regulatory approvals or financing, fluctuating metal prices, the possibility of project cost overruns, mechanical failure, unavailability of parts and supplies, labour disturbances, interruption in transportation or utilities, adverse weather conditions, and unanticipated costs and expenses, variations in the cost of energy or materials or supplies or environmental impacts on operations. There can be no assurance that such statements will prove to be accurate, and actual results and future events could differ materially from those anticipated in such statements. Readers are cautioned not to place undue reliance on forward-looking statements. The Company does not intend, and expressly disclaims any intention or obligation to, update or revise any forward-looking statements whether as a result of new information, future events or otherwise, except as required by law.
            </p>

            
            <hr className="border-black opacity-25"/>

            <h2 className="text-card-header font-semibold">
                QP Statement
            </h2>
            <p>
                The technical information contained in this website has been reviewed and approved by Mr. Derrick Strickland, P. Geo, (1000315) an independent “Qualified Person” (“QP”) as defined in National Instrument 43-101 – Standards of Disclosure for Mineral Projects. March 28, 2023.
            </p>
        </div>
    </section>

    </Layout>
  );
};

export default Legal;
