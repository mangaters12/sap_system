import express from 'express';
import { getFinances, getFinanceById, createFinance, updateFinance, deleteFinance } from '../controllers/finance.controller.js';

const router = express.Router();

router.get('/', getFinances);
router.get('/:id', getFinanceById);
router.post('/', createFinance);
router.put('/:id', updateFinance);
router.delete('/:id', deleteFinance);

export default router;
