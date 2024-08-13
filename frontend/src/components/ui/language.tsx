import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LanguageDropdown: React.FC = () => {
    // Estado para manejar si el menú desplegable está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    // Estado para manejar el idioma seleccionado
    const [selectedLanguage, setSelectedLanguage] = useState('Español');

    // Lista de idiomas disponibles
    const languages = ['Español', 'Italiano', 'Portugués'];

    // Maneja el cambio de idioma y cierra el menú desplegable
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false); // Cierra el menú desplegable después de seleccionar un idioma
    };

    return (
        <div className="relative">
            {/* Botón para abrir/cerrar el menú desplegable */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 hover:text-white hover:bg-blue-600 py-1 px-4 rounded-full"
            >
                {/* Icono de globo */}
                <FaGlobe />
                {/* Idioma seleccionado */}
                <span>{selectedLanguage}</span>
            </button>

            {/* Menú desplegable de idiomas */}
            {isOpen && (
                <ul className="absolute bottom-full mb-2 w-32 bg-white text-black rounded-lg shadow-lg">
                    {languages.map((language) => (
                        <li
                            key={language}
                            onClick={() => handleLanguageChange(language)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                            {language}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;

