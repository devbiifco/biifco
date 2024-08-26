// src/components/ui/Login.tsx
import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useRouter } from 'next/router';

/**
 * Componente de inicio de sesión.
 * 
 * Maneja el formulario de inicio de sesión, envía los datos al backend y maneja la respuesta.
 * Guarda el token JWT en el localStorage y redirige al usuario a la página de perfil si el inicio de sesión es exitoso.
 */
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
      router.push('/profile'); // Redirige al perfil u otra página protegida
    } catch (err: unknown) {
      // Asegúrate de que `err` es un objeto con una propiedad `response` y `data`
      if (err instanceof Error && (err as any).response && (err as any).response.data) {
        setError((err as any).response.data.error);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 bg-white shadow-md rounded-lg w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-6">Log in to biifco</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="px-12 py-2 border rounded-full bg-blue-400 text-white hover:bg-blue-600 transition-colors duration-300">
          Log In
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <a href="/signup" className="text-sm mb-2 hover:text-primary transition-colors duration-300">Don’t have an account? Sign Up</a>
      <a href="#" className="text-sm hover:text-primary transition-colors duration-300">Forgot your user/password?</a>
    </div>
  );
};

export default Login;
