import express from 'express';
import { login, signup } from '../controllers/auth.controller.js';
import { profile } from '../controllers/protected.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/profile', authMiddleware, profile);

export default authRouter;
