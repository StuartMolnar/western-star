import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, member }) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-[55] inset-0 flex items-center justify-center m-2">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>
      
      <div className="overflow-y-auto max-h-[calc(100%-4rem)] bg-black transform transition-all max-w-[600px] rounded-2xl py-4 dsk:py-8 px-6 dsk:px-12 mt-[-2rem]">
        <span onClick={onClose} className="absolute top-4 right-8 first-line:text-page-header cursor-pointer">
          &times;
        </span>

        <div className="flex flex-col">
          <h3 className="text-card-header font-bold">{member.name}</h3>
          <p className="text-card-subheader font-bold text-gold mt-2">{member.role}</p>
          <p className="text-card-subheader font-light mt-8">{member.full_description}</p>
        </div>
        <hr className="my-6" />
        <button onClick={onClose} type="button" className="read-more-btn font-normal text-base text-gold py-2">
          See Less
        </button>
      </div>
    </div>
  );
};

export default Modal;
