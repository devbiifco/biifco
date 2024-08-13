// src/components/ui/themeSwitcher.tsx
"use client";

import React from 'react';

const ThemeSwitcher: React.FC = () => {
  return (
    <div>
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
