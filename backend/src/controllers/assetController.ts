import { Request, Response } from 'express';
import Asset, { IAsset } from '../models/asset';
import User from '../models/user';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

// Crear un nuevo activo tokenizado
export const createAsset = async (req: AuthenticatedRequest, res: Response) => {
  const { name, description, metadata } = req.body;
  const userId = req.user.id;

  try {
    const owner = await User.findById(userId);

    if (!owner) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const newAsset: IAsset = new Asset({
      name,
      description,
      tokenId: `TOKEN-${Date.now()}`, // Simulación de tokenización
      owner: owner._id,
      metadata,
    });

    await newAsset.save();

    res.status(201).json(newAsset);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Obtener todos los activos del usuario autenticado
export const getUserAssets = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user.id;

  try {
    const assets = await Asset.find({ owner: userId });

    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

