/* VERSION FUNCIONAL

import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

export default router;
*/

// src/routes/userRoutes.ts

import { Router, Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateToken } from '../middlewares/authMiddleware';
import { authRole } from '../middlewares/authRole'; // Importa el middleware de roles
import { getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController'; // Asegúrate de que `deleteUser` esté exportado desde `userController`

const router = Router();

// Middleware para manejar errores de validación
const validateInputs = (req: Request, res: Response, next: NextFunction): Response | void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Ruta para registrar un nuevo usuario con validaciones
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

// Ruta para iniciar sesión (puedes agregar validaciones aquí si lo consideras necesario)
router.post('/login', loginUser);

// Ruta para obtener el perfil del usuario
router.get('/profile', authenticateToken, getUserProfile);

// Ruta para actualizar el perfil del usuario
router.put('/profile', authenticateToken, updateUserProfile);

// Ruta protegida solo para admin para eliminar un usuario
router.delete(
  '/:id',
  authenticateToken,
  authRole('admin'),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteUser(id);
      return res.status(204).send(); // Asumiendo que `deleteUser` devuelve una promesa y elimina el usuario
    } catch (error) {
      // Especificar el tipo de error como Error
      return res.status(500).json({ error: (error as Error).message });
    }
  }
);

export default router;
