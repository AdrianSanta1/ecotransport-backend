import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token no enviado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).usuario = decoded;
    next();
  } catch {
    res.status(403).json({ error: "Token inválido" });
  }
}
