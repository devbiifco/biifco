// src/routes/userRoutes.ts

import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

export default router;
