// src/@types/express/index.d.ts
import { IUser } from '../../models/user'; // Ajusta la ruta según la ubicación de tu archivo `user`

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Añade la propiedad `user` de tipo `IUser`
    }
  }
}
