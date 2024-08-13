"use client"; // Asegúrate de que esto esté al inicio del archivo

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TextButton from './textButton';
import PrimaryButton from './primaryButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-10 shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo de la marca */}
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/biifco.svg" alt="biifco" width={130} height={32} />
          </a>
        </Link>

        {/* Botón de menú para móviles */}
        <button
          className="block md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navegación principal */}
        <nav className={`md:flex md:space-x-4 text-sm ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="#Products" legacyBehavior>
            <TextButton href="#Products">Products</TextButton>
          </Link>
          <Link href="#Solutions" legacyBehavior>
            <TextButton href="#Solutions">Solutions</TextButton>
          </Link>
          <Link href="#Resources" legacyBehavior>
            <TextButton href="#Resources">Resources</TextButton>
          </Link>
          <Link href="#Docs" legacyBehavior>
            <TextButton href="#Docs">Docs</TextButton>
          </Link>
          <Link href="#Pricing" legacyBehavior>
            <TextButton href="#Pricing">Pricing</TextButton>
          </Link>
        </nav>

        {/* Sección de botones de acciones (Login, Contact, Sign Up) */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/login" legacyBehavior>
            <PrimaryButton href="/login">Login</PrimaryButton>
          </Link>
          <Link href="#contact" legacyBehavior>
            <PrimaryButton href="#contact">Contact</PrimaryButton>
          </Link>
          <Link href="#signup" legacyBehavior>
            <PrimaryButton href="#signup">Sign Up</PrimaryButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
