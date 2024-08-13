"use client"; // Asegúrate de que esto esté al inicio del archivo

import React from 'react';

interface FooterButtonProps {
  text: string;
  children: React.ReactNode;
}

const FooterButton: React.FC<FooterButtonProps> = ({ text, children }) => {
  return (
    <div className="flex items-center space-x-2 py-1 px-4 hover:bg-blue-600 hover:text-white rounded-full cursor-pointer">
      {children}
      <span>{text}</span>
    </div>
  );
};

export default FooterButton;
