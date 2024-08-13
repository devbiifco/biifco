// src/components/ui/socialIcons.tsx
"use client";

import React from 'react';
import SocialIcon from './socialIcon';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <SocialIcon icon={<FaFacebook />} url="https://facebook.com" />
      <SocialIcon icon={<FaTwitter />} url="https://twitter.com" />
      <SocialIcon icon={<FaInstagram />} url="https://instagram.com" />
    </div>
  );
};

export default SocialIcons;
