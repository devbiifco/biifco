// src/components/ui/TextButton.tsx
import React from 'react';

interface TextButtonProps {
  href: string;
  children: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300"
    >
      {children}
    </a>
  );
};

export default TextButton;
