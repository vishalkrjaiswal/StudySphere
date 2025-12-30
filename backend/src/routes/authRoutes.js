import express from 'express';
import { register, login, me } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js'; // <- ES Module import with .js extension

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, me);

export default router;
