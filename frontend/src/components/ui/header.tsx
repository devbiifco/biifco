import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-8">
        <div className="flex items-center"><a href="/">
          <Image src="/biifco.svg" alt="biifco" width={130} height={32} />
          </a>
        </div>
        <nav className="flex space-x-4 text-sm">
          <a href="#Prdoucts" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Product</a>
          <a href="#Solutions" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
          <a href="#Resources" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Resources</a>
          <a href="#Docs" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Docs</a>
          <a href="#Pricing" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Pricing</a>
        </nav>
        <div className="flex space-x-4 text-sm">
          <a href="/login" className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Login</a>
          <a href="#contact" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Contact</a>
          <a href="#signup" className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
