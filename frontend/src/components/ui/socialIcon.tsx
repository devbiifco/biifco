// src/components/ui/socialIcon.tsx
"use client";

import React from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  url: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, url }) => {
  return (
    <a href={url} className="text-gray-700 hover:text-gray-900">
      {icon}
    </a>
  );
};

export default SocialIcon;
