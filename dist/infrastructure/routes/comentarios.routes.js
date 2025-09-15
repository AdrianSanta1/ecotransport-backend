"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ComentariosController_1 = require("../controller/ComentariosController");
const router = (0, express_1.Router)();
router.post("/", ComentariosController_1.ComentarioController.crear);
router.get("/usuario/:usuarioId", ComentariosController_1.ComentarioController.listarPorUsuario);
router.put("/:id", ComentariosController_1.ComentarioController.actualizar);
router.delete("/:id", ComentariosController_1.ComentarioController.eliminar);
exports.default = router;
//# sourceMappingURL=comentarios.routes.js.map