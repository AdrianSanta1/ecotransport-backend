import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";

const router = Router();

// Crear y listar (ya los tenías)
router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);

// 👉 NUEVA: obtener por id
router.get("/:id", UsuarioController.obtenerPorId);

// 👉 Desactivar (eliminación lógica)
router.put("/:id/desactivar", UsuarioController.desactivar);

export default router;
