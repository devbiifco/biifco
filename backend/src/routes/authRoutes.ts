import { Router, Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { registerUser, loginUser } from '../controllers/authController';
import { check, validationResult } from 'express-validator';

const router = Router();

// Configuración de JWT_SECRET (cargado desde el archivo .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware de validación para la ruta de registro
const validateRegister = [
  check('email').isEmail().withMessage('Enter a valid email'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Ruta para registrar un nuevo usuario
router.post('/register', validateRegister, (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next(); // Asegúrate de retornar aquí
}, registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para refrescar el token
router.post('/refresh-token', async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401); // No autorizado si no se proporciona token
  }

  try {
    const decoded = await new Promise<JwtPayload | string | undefined>((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, (err: VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded);
      });
    });

    if (typeof decoded === 'object' && 'id' in decoded) {
      const { id } = decoded as JwtPayload;
      const newToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token: newToken });
    } else {
      return res.sendStatus(403); // Prohibido si el token no contiene `id`
    }
  } catch (error) {
    return res.sendStatus(403); // Prohibido si ocurre un error al verificar el token
  }
});

export default router;
