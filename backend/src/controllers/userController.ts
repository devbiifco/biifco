// src/controllers/userController.ts

import { Request, Response } from 'express';
import User from '../models/user';

// Obtener perfil del usuario
export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById((req as any).user.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return; // Asegura que la función termine aquí si no se encuentra el usuario
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user profile' });
  }
};

// Actualizar perfil del usuario
export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(
      (req as any).user.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return; // Asegura que la función termine aquí si no se encuentra el usuario
    }
    res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Eliminar un usuario
export const deleteUser = async (id: string): Promise<void> => {
  try {
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      throw new Error('User not found');
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

