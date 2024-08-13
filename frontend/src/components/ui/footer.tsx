"use client";

import React, { useState, useEffect } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCookieBite,
  FaBolt,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import LanguageDropdown from './language'; // Asegúrate de importar el componente aquí
import Copyright from './copyright'

// Componente Footer
const Footer: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Efecto para manejar el modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <footer className="fixed bottom-0 left-0 w-full p-8 py-4 bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Sección de Logo y Copyright */}
        <div className="flex items-center mb-4 md:mb-0 space-x-4">
          {/* Logo de la Marca */}
          <Image src="/iso-biifco.svg" alt="biifco" width={25} height={25} />

          {/* Texto de Copyright */}
          <div className="text-sm">
           <Copyright />
          </div>

          {/* Enlaces a Términos de Servicio y Política de Privacidad */}
          <div className="text-sm">
            <Link href="#" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm">
            <Link href="#" className="hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Sección de Íconos de Redes Sociales */}
        <div className="flex mb-4 md:mb-0 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
        </div>

        {/* Sección de Cookies, Estado del Servicio y Selector de Idioma */}
        <div className="flex space-x-2 text-sm">
          {/* Selector de Idioma */}
          <div className="flex items-center space-x-2 py-1 px-4 hover:bg-blue-600 hover:text-white rounded-full">
            <LanguageDropdown />
          </div>

          {/* Enlace a la Sección de Cookies */}
          <div className="flex items-center space-x-2 py-1 px-4 hover:bg-blue-600 hover:text-white rounded-full">
            <FaCookieBite />
            <span>Cookies</span>         
          </div>
     

          {/* Enlace al Estado del Servicio */}
          <div className="flex items-center space-x-2 py-1 px-4 hover:bg-blue-600 hover:text-white rounded-full">
            <FaBolt />
            <span>Service Status</span>
          </div>

          {/* Interruptor de Modo Claro/Oscuro */}
          <div className="flex items-center ml-6">
            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`cursor-pointer w-16 h-8 rounded-full p-3 flex items-center ${darkMode ? 'bg-gray-100' : 'bg-gray-100'}`}
            >
              {/* Ícono del Sol (Modo Claro) */}
              <FaSun
                className={`transition-colors duration-300 ${darkMode ? 'text-blue-600' : 'text-black'}`}
              />

              {/* Ícono de la Luna (Modo Oscuro) */}
              <FaMoon
                className={`ml-auto transition-colors duration-300 ${darkMode ? 'text-black' : 'text-blue-600'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
