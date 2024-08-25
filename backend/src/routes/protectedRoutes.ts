import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import { someProtectedRouteHandler } from '../controllers/protectedController';

const router = Router();

router.get('/protected', authenticateToken, someProtectedRouteHandler);

export default router;
