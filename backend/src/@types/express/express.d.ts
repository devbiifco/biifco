import { IUser } from '../../models/user'; // Ajusta esta ruta si es necesario

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser | null;  // Aquí definimos que `user` puede existir y ser de tipo `IUser`
  }
}
