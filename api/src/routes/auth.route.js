import { Router } from 'express';
import { loginUser, logout, registerUser } from '../controllers/auth.controller.js';
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser)
router.post('/logout', logout)
export { router as authRoute };