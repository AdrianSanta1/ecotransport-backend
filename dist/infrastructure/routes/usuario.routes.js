"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controller/UsuarioController");
const router = (0, express_1.Router)();
// Crear y listar (ya los tenías)
router.post("/", UsuarioController_1.UsuarioController.crear);
router.get("/", UsuarioController_1.UsuarioController.listar);
// 👉 NUEVA: obtener por id
router.get("/:id", UsuarioController_1.UsuarioController.obtenerPorId);
// 👉 Desactivar (eliminación lógica)
router.put("/:id/desactivar", UsuarioController_1.UsuarioController.desactivar);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map