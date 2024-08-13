// src/components/ui/copyright.tsx
"use client";

import React from 'react';

const Copyright: React.FC = () => {
  return (
    <div className="text-center">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  );
};

export default Copyright;
