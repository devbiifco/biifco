// src/components/ui/logo.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image src="/biifco.svg" alt="Logo" width={100} height={50} />
    </div>
  );
};

export default Logo;
