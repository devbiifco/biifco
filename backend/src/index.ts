import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido a la plataforma de tokenización de activos');
});

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error conectando a la base de datos: ', error);
  });
