import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { AppError, ERROR_MESSAGES } from "../errors/index.js";

const clientId = process.env.GOOGLE_CLIENT_ID;
const jwtSecret = process.env.JWT_SECRET;

if (!clientId) throw new Error("GOOGLE_CLIENT_ID is not set");
if (!jwtSecret) throw new Error("JWT_SECRET is not set");

const client = new OAuth2Client(clientId);

export const verifyGoogleCredential = async (credential: string): Promise<string> => {
  const ticket = await client.verifyIdToken({ idToken: credential, audience: clientId });
  const payload = ticket.getPayload();
  if (!payload?.sub) throw new AppError(ERROR_MESSAGES.AUTH_FAILED, 401);
  return payload.sub;
};

export const generateToken = (sub: string): string => {
  return jwt.sign({ sub }, jwtSecret, { expiresIn: "7d" });
};

export const verifyToken = (token: string): void => {
  try {
    jwt.verify(token, jwtSecret);
  } catch {
    throw new AppError(ERROR_MESSAGES.UNAUTHORIZED, 401);
  }
};
