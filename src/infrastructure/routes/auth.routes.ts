// src/infrastructure/routes/auth.routes.ts
import { Router } from "express";
import { AuthService } from "../../application/auth/AuthService";
import { UsuarioRepository } from "../adapter/UsuarioRepository";

const router = Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 👇 Crea el repo y el servicio dentro del handler
    const authService = new AuthService(new UsuarioRepository());
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (e: any) {
    console.error("❌ Error en login:", e.message);
    res.status(401).json({ error: e.message });
  }
});

export default router; // 👈 MUY IMPORTANTE
