import { Router } from "express";
import { showInfo } from "../controllers/user.controller.js";
const router = Router();

router.get('/:id', showInfo) // get the user information (profile)

export {router as userRoute}