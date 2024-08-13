// src/components/ui/PrimaryButton.tsx
import React from 'react';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 transition-all duration-300 rounded-full"
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
