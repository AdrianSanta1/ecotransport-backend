import { Router } from "express";
import { ComentarioController } from "../controller/ComentariosController";

const router = Router();

router.post("/", ComentarioController.crear);
router.get("/usuario/:usuarioId", ComentarioController.listarPorUsuario);
router.put("/:id", ComentarioController.actualizar);
router.delete("/:id", ComentarioController.eliminar);

export default router;
