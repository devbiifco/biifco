import { Router } from 'express';
import { getBalance } from '../services/blockchainService';

const router = Router();

router.get('/balance/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const balance = await getBalance(address);
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
