import { Request, Response } from 'express';
import User, { IUser } from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Registro de usuario
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, walletAddress } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'Usuario ya registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = new User({
      name,
      email,
      password: hashedPassword,
      walletAddress,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1d',
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

// Autenticación de usuario
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1d',
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};
