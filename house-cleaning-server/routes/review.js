import express from 'express';
import { getReview } from '../controllers/review.js';

const router = express.Router();

router.get('/', getReview);

export default router;
