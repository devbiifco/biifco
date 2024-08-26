import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://polygon-rpc.com'); // Asegúrate de usar el endpoint correcto

export const getBalance = async (address: string) => {
  try {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
  } catch (error) {
    throw new Error('Error fetching balance');
  }
};

// Agrega más funciones para interactuar con Polygon según sea necesario
