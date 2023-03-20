import React, { useState, useRef } from 'react';
import Layout from './Layout';
import Modal from '../components/Modal/Board-Modal'; // Import the Modal component
import '../styles/board.css';

const boardMembers = [
  {
    name: 'Blake Morgan',
    role: 'CEO & Director',
    description: 'Mr. Morgan has over 15 years’ experience in Capital Markets, specifically in the Natural Resource and Precious Metals sector, including 10 years with Rio Tinto, BMA Metals (a subsidiary of BHP) and Santos Ltd.',
    full_description:'Mr. Morgan has over 15 years’ experience in Capital Markets, specifically in the Natural Resource and Precious Metals sector, including 10 years with Rio Tinto, BMA Metals (a subsidiary of BHP) and Santos Ltd. Mr. Morgan is a prominent Board Member in numerous publicly traded companies. Mr. Morgan was the president of Origen Resources for numerous years recently stepping back once a world class board was put in place. Mr. Morgan has raised tens of millions of dollars in recent years for both Public and Private companies alike and has successfully taken numerous companies public in the United States, Canada, & Germany.',
  },
  {
    name: 'Monty Sutton',
    role: 'CFO',
    description: 'Mr. Sutton has worked most of his career as an Investment Advisor, Equities Trader, and Insurance Specialist with PI Financial Corp in Vancouver. During this time, he participated in raising over $100m for junior mining companies and managed over 1,500 client accounts.',
    full_description:'Mr. Sutton has worked most of his career as an Investment Advisor, Equities Trader, and Insurance Specialist with PI Financial Corp in Vancouver. During this time, he participated in raising over $100m for junior mining companies and managed over 1,500 client accounts. Since leaving PI, Mr. Sutton was the Corporate Development Manager with eCobalt Solutions where they raised over $30m for the companies Idaho Cobalt Project. Mr. Sutton has also been working with small private companies in various consulting and advisory roles. Prior to joining PI in 1997, Mr. Sutton was a Senior Management Accountant with MacMillan Bloedel; preparing budgets, analyzing costs, and assisting in the dCehsrigisnRaenydnimolpdlsem- Deinrteacttionr of new accounting systems.',
  },
  {
    name: 'Justin Corinella',
    role: 'Director',
    description: 'Mr. Corinella has a broad background in public markets and corporate financing. His focus is on early-stage venture companies with potential for large growth, scalability, and value creation.',
    full_description:'Mr. Corinella has a broad background in public markets and corporate financing. His focus is on early-stage venture companies with potential for large growth, scalability, and value creation. Mr. Corinella was the Head of Technology for CSE listed Squire Mining Ltd., and as part of the executive team, he participated in raising $28m in financing, and developed strategic partnerships with key stakeholders in North America, Europe, and Asia. Mr. Corinella is the inventor and Co-founder of Dahrwin LLC. , Dahrwin is a wireless technology company based out of New York, founded in 2012. The company raised venture funding, spearheaded software & hardware development, and received five issued patents. His endeavors have positioned him as a lead in multiple R&D and Engineering departments working on various US military and government-based technologies.',
  },
  {
    name: 'Dallas Miller',
    role: 'Director',
    description: 'Mr. Millar has been working with BHP and Santos Ltd. since 2010, both in Australia and in Papua New Guinea. He has extensive knowledge of the roles and responsibilities needed to take on and run a successful mining operation.',
    full_description:'Mr. Millar has been working with BHP and Santos Ltd. since 2010, both in Australia and in Papua New Guinea. Mr. Miller has extensive knowledge of the roles and responsibilities needed to take on and run a successful mining operation. Mr. Miller has experience on the ground from an operational standpoint and has also been an integral part in raising millions of dollars in capital funding in recent years for both private and public companies. Mr. Miller is a prominent member of numerous public companies.',
  },
];

const Board = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const boardMembersRef = useRef();

  const scrollToBoardMembers = (e) => {
    e.preventDefault();
    boardMembersRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <Layout>

      <Modal isOpen={!!selectedMember} onClose={closeModal} member={selectedMember || {}} />

      <div>
        <section className="board-header-bg px-32 py-44">
          <h1 className="text-page-header font-semibold">
            Meet our board
          </h1>
          <a className="read-more-btn font-normal text-gold" onClick={scrollToBoardMembers}>Read More ▸</a>
          
        </section>

        <section className="board-section-bg text-white">
          <div ref={boardMembersRef} className="board-members p-20 flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 justify-center">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-black p-4 rounded-2xl shadow max-w-[600px]">
                  <div className="card-content p-8 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-card-header font-bold">{member.name}</h3>
                      <p className="text-card-subheader font-bold text-gold mt-2">{member.role}</p>
                      <p className="text-card-subheader font-light mt-8">{member.description}</p>
                    </div>
                    <div>
                      <hr className="my-12" />
                      <a className="read-more-btn font-normal text-base text-gold"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(member);
                          }}
                      >Read More ▸</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
    </Layout>
  );
};

export default Board;
