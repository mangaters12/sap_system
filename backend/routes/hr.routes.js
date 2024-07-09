import express from 'express';
import { getHRs, getHRById, createHR, updateHR, deleteHR } from '../controllers/hr.controller.js';

const router = express.Router();

router.get('/', getHRs);
router.get('/:id', getHRById);
router.post('/', createHR);
router.put('/:id', updateHR);
router.delete('/:id', deleteHR);

export default router;
