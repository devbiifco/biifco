"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si hay un token de sesión almacenado
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Eliminar el token de sesión y cambiar el estado
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirigir a la home
    window.location.href = '/';
  };

  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-8 py-4">
        <div className="flex items-center">
          <div>
            <Link href="/">
              <Image src="/biifco.svg" alt="biifco" width={130} height={32} />
            </Link>
          </div>
          <div className="container mx-auto flex justify-between items-center p-8 py-4">
            {/* Menú de navegación para pantallas grandes */}
            <nav className="hidden md:flex space-x-4 text-sm">
              <a href="#home" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Product</a>
              <a href="#about" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
              <a href="#services" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Resources</a>
              <a href="#blog" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Docs</a>
              <a href="#contact" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Pricing</a>
            </nav>
          </div>
        </div>

        {/* Botones de autenticación para pantallas grandes */}
        <div className="hidden md:flex space-x-4 text-sm">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Logout</button>
              <a href="#" className="rounded bg-secondary text-black hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300">Contact</a>
            </>
          ) : (
            <>
              <a href="/login" className="hover:bg-secondary py-1 px-4 rounded-full transition-all duration-300">Login</a>
              <a href="/signup" className="rounded bg-secondary text-black hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
            </>
          )}
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
        <div className="md:hidden bg-background shadow-md w-full fixed top-16 left-0 z-10">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Product</a>
            <a href="#about" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Solutions</a>
            <a href="#services" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Resources</a>
            <a href="#blog" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Docs</a>
            <a href="#contact" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Pricing</a>

            {/* Botones de autenticación */}
            <div className="flex flex-col items-center space-y-2 pt-4">
              {isLoggedIn ? (
                <>
                  <button onClick={handleLogout} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Logout</button>
                  <a href="#" className="rounded bg-secondary text-white hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300">Contact</a>
                </>
              ) : (
                <>
                  <a href="/login" onClick={toggleMenu} className="hover:bg-accent py-1 px-4 rounded-full transition-all duration-300">Login</a>
                  <a href="#signup" onClick={toggleMenu} className="rounded bg-secondary text-white hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300">Contact</a>
                  <a href="#signup" onClick={toggleMenu} className="rounded bg-secondary text-white hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300">Sign Up</a>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
