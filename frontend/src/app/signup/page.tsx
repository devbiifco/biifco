"use client";
import React from 'react';
import Signup from '@/components/ui/signup'; // Asegúrate de que la ruta sea correcta

/**
 * Componente de la página de registro.
 * 
 * Esta página se encarga de renderizar el componente Signup centrado en la pantalla.
 * Utiliza Tailwind CSS para centrar el contenido vertical y horizontalmente.
 */
const SignupPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Renderiza el componente de registro */}
      <Signup />
    </div>
  );
};

export default SignupPage;
