import { Router } from "express";
import { showInfo, updateInfo } from "../controllers/user.controller.js";
import { isAuthUser } from "../middleware/auth.middleware.js";
const router = Router();

router.get('/:id', isAuthUser, showInfo) // get the user information (profile)
router.put('/update/:id', isAuthUser, updateInfo);
export { router as userRoute }