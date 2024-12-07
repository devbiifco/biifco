import { ethers } from 'ethers';
import Web3 from 'web3';
import { encrypt } from '@/lib/encryption';

export const createWallet = async () => {
  try {
    const provider = new ethers.providers.InfuraProvider(
      'maticmum', // Polygon Mumbai testnet
      process.env.INFURA_PROJECT_ID
    );
    
    const wallet = ethers.Wallet.createRandom();
    const connectedWallet = wallet.connect(provider);
    
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };
  } catch (error) {
    console.error('Error creating wallet:', error);
    throw new Error('Failed to create wallet');
  }
};

export const getWeb3 = () => {
  if (!process.env.INFURA_PROJECT_ID) {
    throw new Error('Infura Project ID not configured');
  }
  
  const infuraUrl = `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
  return new Web3(new Web3.providers.HttpProvider(infuraUrl));
};