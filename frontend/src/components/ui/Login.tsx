import React from 'react';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow p-4">
      <h1 className="text-2xl font-bold mb-6">Log in to biifco</h1>
      <div className="flex flex-col space-y-4 mb-6">
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-blue-400 text-white hover:bg-blue-600">
          <FaFacebook />
          <span>Continue with Facebook</span>
        </button>
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-red-400 text-white hover:bg-red-600">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
        <button className="flex items-center space-x-5 px-12 py-2 border rounded-full bg-gray-400 text-white hover:bg-black">
          <FaApple />
          <span>Continue with Apple</span>
        </button>
      </div>
      <button className="flex items-center space-x-2 px-12 py-2 mb-4 hover:text-blue-600">
        <span>Continue with Email</span>
        <span>&rarr;</span>
      </button>
      <a href="#" className="text-sm mb-2 hover:text-blue-600">Don’t have an account? Sign Up</a>
      <a href="#" className="text-sm hover:text-blue-600">Forgot your user/password?</a>
    </div>
  );
};

export default Login;
