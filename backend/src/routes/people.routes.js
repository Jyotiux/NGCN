import express from 'express';
import { getPeople } from '../controllers/people.controller.js';
const router = express.Router();
router.get('/', getPeople);
export default router;
