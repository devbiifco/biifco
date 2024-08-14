"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-8 py-4">
        <div className="flex items-center">
          <div >
          <Image src="/biifco.svg" alt="biifco" width={130} height={32} />
          </div>
        <div className="container mx-auto flex justify-between items-center p-8 py-4">
        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="#home" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Product</a>
          <a href="#about" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
          <a href="#services" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Resources</a>
          <a href="#blog" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Docs</a>
          <a href="#contact" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Pricing</a>
        </nav>
        </div>
        </div>
        {/* Botones de autenticación para pantallas grandes */}
        <div className="hidden md:flex space-x-4 text-sm">
          <a href="/login" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Login</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Contact</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full fixed top-16 left-0 z-10">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" onClick={toggleMenu} className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Product</a>
            <a href="#about" onClick={toggleMenu} className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
            <a href="#services" onClick={toggleMenu} className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Resources</a>
            <a href="#blog" onClick={toggleMenu} className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Docs</a>
            <a href="#contact" onClick={toggleMenu} className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Pricing</a>

            {/* Botones de autenticación */}
            <div className="flex flex-col items-center space-y-2 pt-4">
          <a href="/login" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Login</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Contact</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
         </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
