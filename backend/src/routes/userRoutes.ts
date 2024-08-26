import { Router, Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { registerUser, loginUser } from '../controllers/authController';
// @ts-ignore: Ignorar advertencia de 'authenticateToken' no usado
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

// Middleware para manejar errores de validación
const validateInputs = (
  req: Request, 
  res: Response, 
  next: NextFunction
): Response | void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

/* eslint-disable @typescript-eslint/no-unused-vars */ // Suprime la advertencia de TypeScript para req

// Ruta para registrar un nuevo usuario
router.post(
  '/register',
  [
    check('email').isEmail().withMessage('Enter a valid email'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  validateInputs,
  registerUser
);

// Ruta para iniciar sesión
router.post('/login', loginUser);

export default router;
