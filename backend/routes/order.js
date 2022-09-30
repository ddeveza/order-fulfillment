import express from 'express';
import { getOrder } from '../controller/order.js';

const router = express.Router();

router.get('/', getOrder);

export default router;
