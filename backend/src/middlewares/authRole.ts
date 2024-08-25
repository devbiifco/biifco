import { Request, Response, NextFunction } from 'express';

// Definir una interfaz para el objeto `user` si no está definida en otro lugar
interface IUser {
  role: string;
}

// Añadir un tipo explícito para el objeto `user` en el request
interface IRequest extends Request {
  user?: IUser;
}

export const authRole = (role: string) => {
  return (req: IRequest, res: Response, next: NextFunction) => {
    const user = (req as IRequest).user;

    if (!user || user.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
    }

    next(); // Continúa con el siguiente middleware
    return; // Añadir un return explícito aquí
  };
};
