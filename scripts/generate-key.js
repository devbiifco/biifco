import { randomBytes } from 'crypto';

// Generate a secure random key
const key = randomBytes(32).toString('base64');
console.log('Generated encryption key:', key);
console.log('\nAdd this key to your .env file as ENCRYPTION_KEY');