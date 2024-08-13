// src/components/ui/SocialIcon.tsx
import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default SocialIcon;
