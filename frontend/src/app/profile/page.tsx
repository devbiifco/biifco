// src/app/profile/page.tsx
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-4">Welcome to your profile page!</p>
      {/* Agrega más contenido aquí, como detalles del usuario */}
    </div>
  );
};

export default Profile;
