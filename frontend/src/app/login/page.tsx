// src/pages/login.tsx o src/app/login/page.tsx
import React from 'react';
import Login from '@/components/ui/Login'; // Asegúrate de que la ruta sea correcta

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login />
    </div>
  );
};

export default LoginPage;
