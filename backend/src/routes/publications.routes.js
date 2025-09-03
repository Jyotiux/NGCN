import express from 'express';
import { getPublications } from '../controllers/publications.controller.js';
const router = express.Router();
router.get('/', getPublications);
export default router;
