import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaApple, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance'; // Importa axiosInstance

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/register', {
        email: formData.email,
        password: formData.password
      });
      setSuccess('User registered successfully!');
      setError(null);
      console.log('Success:', response.data);
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccess(null);
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center flex-grow p-4">
      <h1 className="text-2xl font-bold mb-6">Sign up for biifco</h1>
      {/* Mensajes de éxito o error */}
      {success && <div className="text-green-500">{success}</div>}
      {error && <div className="text-red-500">{error}</div>}
      {/* Botones de registro con redes sociales */}
      <div className="flex flex-col space-y-4 mb-6">
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-blue-400 text-white hover:bg-blue-600 transition-colors duration-300">
          <FaFacebook />
          <span>Continue with Facebook</span>
        </button>
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-red-400 text-white hover:bg-red-600 transition-colors duration-300">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-gray-400 text-white hover:bg-black transition-colors duration-300">
          <FaApple />
          <span>Continue with Apple</span>
        </button>
      </div>
      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 py-0 w-full max-w-sm">
        <div className="relative flex items-center ">
          <FaUser className="absolute left-4 text-gray-400" />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Full Name"
          />
        </div>
        <div className="relative flex items-center ">
        <FaEnvelope className="absolute left-4 text-gray-400" />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="relative flex items-center ">
        <FaLock className="absolute left-4 text-gray-400" />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
        />
        </div>
        <button 
          type="submit" 
          className="rounded bg-secondary text-black hover:text-white hover:bg-primary py-1 px-4 rounded-full transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
      {/* Enlaces para iniciar sesión y recuperación de contraseña */}
      <a href="/login" className="text-sm mt-4 hover:text-primary transition-colors duration-300">
        Already have an account? Log in
      </a>
      <a href="#" className="text-sm hover:text-primary transition-colors duration-300">
        Forgot your user/password?
      </a>
    </div>
  );
};

export default Signup;
