import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Componente Header
const Header: React.FC = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-8">

        {/* Logo de la marca */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/biifco.svg" alt="biifco" width={130} height={32} />
            </a>
          </Link>
        </div>

        {/* Navegación principal */}
        <nav className="flex space-x-4 text-sm">
          <Link href="#Products" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Products</a>
          </Link>
          <Link href="#Solutions" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
          </Link>
          <Link href="#Resources" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Resources</a>
          </Link>
          <Link href="#Docs" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Docs</a>
          </Link>
          <Link href="#Pricing" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Pricing</a>
          </Link>
        </nav>

        {/* Sección de botones de acciones (Login, Contact, Sign Up) */}
        <div className="flex space-x-4 text-sm">
          <Link href="/login" legacyBehavior>
            <a className="hover:bg-gray-100 py-1 px-4 rounded-full transition-all duration-300">Login</a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Contact</a>
          </Link>
          <Link href="#signup" legacyBehavior>
            <a className="rounded bg-gray-100 text-gray-800 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
