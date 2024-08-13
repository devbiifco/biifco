import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TextButton from './textButton';
import PrimaryButton from './primaryButton';

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
        <div className="flex space-x-4 text-sm">
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

