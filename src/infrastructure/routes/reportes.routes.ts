import { Router } from "express";
import { ReporteController } from "../controller/ReportesController";

const router = Router();

router.post("/", ReporteController.crear);
router.get("/usuario/:usuarioId", ReporteController.listarPorUsuario);
router.delete("/:id", ReporteController.eliminar);

// Nuevo endpoint para gráfica
router.get("/:id/semanal", ReporteController.co2Semanal);

export default router;

