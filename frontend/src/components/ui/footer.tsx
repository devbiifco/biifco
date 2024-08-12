// src/components/ui/footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCookieBite, FaCheckCircle, FaBolt, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto flex justify-between items-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo y Copyright */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {/* Logo de la Marca */}
          <Image src="/iso-biifco.svg" alt="biifco" width={30} height={30} />
          {/* Copyright */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Biffco • All Rights Reserved.
          </div>

            <div className="text-sm">
              Terms of Service
            </div>
            <div className="text-sm">
              Privacy Policy
            </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-600 transition-colors duration-300" />
          </a>
        </div>

        {/* Cookies y Estado del Servicio */}
        <div className="flex space-x-6 text-sm">
        <div className="flex items-center space-x-2 hover:text-white hover:bg-blue-600 py-1 px-2 rounded-full transition-all duration-300">
            <FaGlobe />
            <span>English</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white hover:bg-blue-600 py-1 px-2 rounded-full transition-all duration-300">
            <FaCookieBite />
            <span>Cookies</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white hover:bg-blue-600 py-1 px-2 rounded-full transition-all duration-300">
            <FaBolt />
            <span>Service Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
