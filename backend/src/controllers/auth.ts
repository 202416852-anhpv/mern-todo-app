import type { Request, Response } from "express";
import * as authService from "../services/auth.js";
import { AppError, ERROR_MESSAGES } from "../errors/index.js";
import logger from "../logger/index.js";

export const googleLogin = async (req: Request, res: Response) => {
  const { credential } = req.body;
  if (!credential) {
    throw new AppError(ERROR_MESSAGES.AUTH_FAILED, 401);
  }

  const sub = await authService.verifyGoogleCredential(credential);
  const token = authService.generateToken(sub);

  logger.info({ sub }, "User logged in via Google");
  res.json({ token });
};
