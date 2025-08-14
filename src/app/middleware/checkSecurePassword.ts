import { Request, Response, NextFunction } from "express";
import config from "../config";

const SECURE_PASSWORD = config.secure_password || "mySecret123";

export const checkSecurePassword = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { securePassword } = req.body;

  if (!securePassword) {
    res.status(400).json({
      success: false,
      message: "Secure password is required",
    });
    return; // void return
  }

  if (securePassword !== SECURE_PASSWORD) {
    res.status(401).json({
      success: false,
      message: "Invalid secure password",
    });
    return; // void return
  }

  // valid password, remove from body and continue
  delete req.body.securePassword;
  next();
};
