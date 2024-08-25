import { Router, Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { registerUser, loginUser } from '../controllers/authController';
import { check, validationResult } from 'express-validator';

const router = Router();

// Configuración de JWT_SECRET (cargado desde el archivo .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware de validación para la ruta de registro
const validateRegister = [
  check('email').isEmail().withMessage('Enter a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// Ruta para registrar un nuevo usuario
router.post('/register', validateRegister, (req: Request, res: Response, next: NextFunction) => {
  // Verifica si hay errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si hay errores, responde con un estado 400 y los errores
    return res.status(400).json({ errors: errors.array() });
  }
  // Si no hay errores, pasa al siguiente middleware (registerUser)
  return next();
}, registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para refrescar el token
router.post('/refresh-token', (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401); // No autorizado si no se proporciona token
  }

  // Verifica el token
  jwt.verify(token, JWT_SECRET, (err: jwt.VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
    if (err || !decoded) {
      return res.sendStatus(403); // Prohibido si el token no es válido
    }

    // Asegúrate de que `decoded` tenga una propiedad `id`
    if (typeof decoded === 'object' && 'id' in decoded) {
      const { id } = decoded as JwtPayload;
      const newToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token: newToken });
    } else {
      return res.sendStatus(403); // Prohibido si el token no contiene `id`
    }
  });
  // Asegúrate de que se retorne una respuesta en todos los caminos
  return res.sendStatus(500); // En caso de error en la verificación, asegúrate de retornar un estado
});

// Ruta para acceso de admin


export default router;
