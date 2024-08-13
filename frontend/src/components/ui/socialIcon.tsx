import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-300 text-black hover:text-blue-600"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;