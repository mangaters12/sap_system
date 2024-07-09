import express from 'express';
import { getPurchases, getPurchaseById, createPurchase, updatePurchase, deletePurchase } from '../controllers/purchasing.controller.js';

const router = express.Router();

router.get('/', getPurchases);
router.get('/:id', getPurchaseById);
router.post('/', createPurchase);
router.put('/:id', updatePurchase);
router.delete('/:id', deletePurchase);

export default router;
