// src/index.ts

import express from 'express';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes'; // Importamos las rutas de usuario
import blockchainRoutes from './routes/blockchainRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());
connectDB();

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

// Usar las rutas de blockchain
app.use('/api/blockchain', blockchainRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
