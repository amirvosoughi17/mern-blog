import { Router } from "express";
import { showInfo, updateInfo } from "../controllers/user.controller.js";
const router = Router();

router.get('/:id', showInfo) // get the user information (profile)
router.put('/update/:id', updateInfo);
export {router as userRoute}