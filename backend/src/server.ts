import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import { limiter } from './middlewares/rateLimiter';
import helmet from 'helmet';

// Cargar variables de entorno
dotenv.config();

const app = express();

app.use(helmet());

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(limiter);

// Rutas
app.use('/api/auth', authRoutes);

app.get('/', (_, res) => res.send('API is OK...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

