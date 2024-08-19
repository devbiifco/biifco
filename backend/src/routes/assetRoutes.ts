import { Router } from 'express';
import { createAsset, getUserAssets } from '../controllers/assetController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/assets', protect, createAsset);
router.get('/assets', protect, getUserAssets);

export default router;
