import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticateUser extends Request {
  user?: { userId: string; role: "patient" | "doctor" | "admin" };
}

export const verifyToken = (
  req: AuthenticateUser,
  res: Response,
  next: NextFunction
) => {
  try {

    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(400).json({ message: "No token, auth denied" });
    }

  
    const token = authHeader.split(' ')[1];

  
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      role: "patient" | "doctor" | "admin";
    };

   
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Error verifying token:", error);
    res.status(401).json({ message: "Token is not valid" });
  }
};
