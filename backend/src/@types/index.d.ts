// @types/express/index.d.ts
import { IUser } from '../models/user';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser; // Ajusta el tipo según tu modelo de usuario
  }
}
