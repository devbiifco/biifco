import { Request, Response } from 'express';

export const someProtectedRouteHandler = (req: Request, res: Response) => {
  res.json({ message: 'This is a protected route', user: (req as any).user });
};