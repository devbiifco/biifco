"use client"; // Asegúrate de que esto esté al inicio del archivo

import React, { useState, useEffect } from 'react';
import SocialButton from './socialIcon'; // Importa el botón social aquí
import FooterButton from './footerButton'; // Importa el botón del footer aquí
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
            &copy; {new Date().getFullYear()} Biffco • All Rights Reserved.
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
          <SocialButton icon={<FaFacebook />} href="https://facebook.com" />
          <SocialButton icon={<FaTwitter />} href="https://twitter.com" />
          <SocialButton icon={<FaInstagram />} href="https://instagram.com" />
          <SocialButton icon={<FaLinkedin />} href="https://linkedin.com" />
        </div>
        
        {/* Sección de Cookies, Estado del Servicio y Selector de Idioma */}
        <div className="flex space-x-2 text-sm">
          {/* Selector de Idioma */}
          <FooterButton text="">
            <LanguageDropdown />
          </FooterButton>
          
          {/* Enlace a la Sección de Cookies */}
          <FooterButton text="Cookies">
            <FaCookieBite />
          </FooterButton>
          
          {/* Enlace al Estado del Servicio */}
          <FooterButton text="Service Status">
            <FaBolt />
          </FooterButton>
          
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