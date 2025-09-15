"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportesController_1 = require("../controller/ReportesController");
const router = (0, express_1.Router)();
router.post("/", ReportesController_1.ReporteController.crear);
router.get("/usuario/:usuarioId", ReportesController_1.ReporteController.listarPorUsuario);
router.delete("/:id", ReportesController_1.ReporteController.eliminar);
// Nuevo endpoint para gráfica
router.get("/:id/semanal", ReportesController_1.ReporteController.co2Semanal);
exports.default = router;
//# sourceMappingURL=reportes.routes.js.map