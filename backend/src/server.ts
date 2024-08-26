import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import { limiter } from './middlewares/rateLimiter';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes'; // Importa las rutas
import cors from 'cors'; // Importa cors

dotenv.config();

const app = express();

// Configura CORS antes de definir las rutas
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

// Aplica helmet para seguridad HTTP
app.use(helmet());

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(limiter);

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (_, res) => res.send('API is OK...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
