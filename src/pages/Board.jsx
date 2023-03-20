import React from 'react';
import Layout from './Layout';
import '../styles/board.css';

const boardMembers = [
  {
    name: 'Blake Morgan',
    role: 'CEO & Director',
    description: 'Mr. Morgan has over 15 years’ experience in Capital Markets, specifically in the Natural Resource and Precious Metals sector, including 10 years with Rio Tinto, BMA Metals (a subsidiary of BHP) and Santos Ltd.',
  },
  {
    name: 'Monty Sutton',
    role: 'CFO',
    description: 'Mr. Sutton has worked most of his career as an Investment Advisor, Equities Trader, and Insurance Specialist with PI Financial Corp in Vancouver. During this time, he participated in raising over $100m for junior mining companies and managed over 1,500 client accounts.',
  },
  {
    name: 'Justin Corinella',
    role: 'Director',
    description: 'Mr. Corinella has a broad background in public markets and corporate financing. His focus is on early-stage venture companies with potential for large growth, scalability, and value creation.',
  },
  {
    name: 'Dallas Miller',
    role: 'Director',
    description: 'Mr. Millar has been working with BHP and Santos Ltd. since 2010, both in Australia and in Papua New Guinea. He has extensive knowledge of the roles and responsibilities needed to take on and run a successful mining operation.',
  },
];

const Board = () => {
  return (
    <Layout>
      <div className="bg-black text-white text-base font-normal font-poppins">
        <section className="board-header-bg px-32 py-44">
          <h1 className="text-page-header font-semibold">
            Meet our board
          </h1>
          <a className="read-more-btn font-normal text-gold" href="">Read More ▸</a>
          
        </section>

        <section className="board-section-bg text-white">
          <div className="board-members p-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-black p-4 rounded-2xl shadow">
                  <div className="card-content p-8 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-card-header font-bold">{member.name}</h3>
                      <p className="text-card-subheader font-bold text-gold mt-2">{member.role}</p>
                      <p className="text-card-subheader mt-8">{member.description}</p>
                    </div>
                    <div>
                      <hr className="my-12" />
                      <a className="read-more-btn font-normal text-base text-gold" href="">
                        Read More ▸
                      </a>
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
