// src/Modal.js
import React, { useState } from 'react';
import Image from 'next/image';

const Modal = ({ imageUrl, onClose }:any) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
        <button
          onClick={onClose}
          tabIndex={2}
          className="absolute text-xl bottom-full right-2 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>
        <Image src={imageUrl} width="600" height="600" alt="Zoomed Image" className="max-w-screen-lg max-h-screen" />
      </div>
    </div>
  );
};

export default Modal;
