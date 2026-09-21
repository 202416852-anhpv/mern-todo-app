import { Router } from "express";
import * as authController from "../controllers/auth.js";

const router = Router();

router.post("/google", authController.googleLogin);

export default router;
