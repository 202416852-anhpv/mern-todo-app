import type { Request, Response, NextFunction } from "express";
import { AppError, ERROR_MESSAGES } from "../errors/index.js";
import * as authService from "../services/auth.js";

export const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    throw new AppError(ERROR_MESSAGES.UNAUTHORIZED, 401);
  }

  authService.verifyToken(header.slice(7));
  next();
};
