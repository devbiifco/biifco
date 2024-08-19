import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');

      // Encuentra el usuario y asigna a la propiedad `user` de `req`
      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return res.status(401).json({ message: 'No autorizado, usuario no encontrado' });
      }

      req.user = user as IUser; // Asegúrate de que `req.user` sea del tipo `IUser`
      next();
    } catch (error) {
      res.status(401).json({ message: 'No autorizado, token fallido' });
    }
  } else {
    res.status(401).json({ message: 'No autorizado, no se encontró el token' });
  }
};
