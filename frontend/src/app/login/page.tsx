import React from 'react';
import Login from '@/components/ui/Login'; // Asegúrate de que la ruta sea correcta

/**
 * Componente de la página de inicio de sesión.
 * 
 * Esta página se encarga de renderizar el componente Login centrado en la pantalla.
 * Utiliza Tailwind CSS para centrar el contenido vertical y horizontalmente.
 */
const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Renderiza el componente de inicio de sesión */}
      <Login />
    </div>
  );
};

export default LoginPage;
