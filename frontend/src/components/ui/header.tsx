import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
    <div className="container mx-auto flex justify-between items-center p-8">
        {/* Logo con Imagen */}
        <div className="flex items-center">
          <Image src="../biifco.svg" alt="biifco" width={145} height={35} />

      </div>
        {/* Navegación */}
        <nav className="flex space-x-4 text-sm">
          <a href="#home" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Product</a>
          <a href="#about" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
          <a href="#services" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Resources</a>
          <a href="#blog" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Docs</a>
          <a href="#contact" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Pricing</a>
        </nav>
  
        {/* Login y Signup */}
        <div className="flex space-x-4 text-sm">
          <a href="#login" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Login</a>          
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Contact</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

