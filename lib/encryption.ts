import CryptoJS from 'crypto-js';

export const encrypt = (text: string): string => {
  if (!process.env.ENCRYPTION_KEY) {
    throw new Error('Encryption key not configured');
  }

  try {
    const ciphertext = CryptoJS.AES.encrypt(text, process.env.ENCRYPTION_KEY);
    return ciphertext.toString();
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
};

export const decrypt = (encryptedText: string): string => {
  if (!process.env.ENCRYPTION_KEY) {
    throw new Error('Encryption key not configured');
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, process.env.ENCRYPTION_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!originalText) {
      throw new Error('Decryption resulted in empty string');
    }
    
    return originalText;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
};