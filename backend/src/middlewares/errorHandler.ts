import type { Request, Response, NextFunction } from "express";
import { AppError, ERROR_MESSAGES } from "../errors/index.js";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  if (err.name === "CastError") {
    res.status(400).json({ message: ERROR_MESSAGES.INVALID_ID_FORMAT });
    return;
  }

  console.error("Unhandled error:", err);
  res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
};
