"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ViajesController_1 = require("../controller/ViajesController");
const RegistrarViajeService_1 = require("../../application/viajes/RegistrarViajeService");
const ViajeRepository_1 = require("../adapter/ViajeRepository");
const UsuarioRepository_1 = require("../adapter/UsuarioRepository");
const TipoTransporteRepository_1 = require("../adapter/TipoTransporteRepository");
const router = (0, express_1.Router)();
// 👇 Instancia del servicio (no la clase)
const viajeService = new RegistrarViajeService_1.RegistrarViajeService(new ViajeRepository_1.ViajeRepository(), new UsuarioRepository_1.UsuarioRepository(), new TipoTransporteRepository_1.TipoTransporteRepository());
// ====== RUTA PARA REGISTRAR VIAJE ======
router.post("/", async (req, res) => {
    try {
        const viaje = await viajeService.execute(req.body); // ✅ ya es instancia
        res.status(201).json(viaje);
    }
    catch (err) {
        console.error("❌ Error en POST /api/viajes:", err.message);
        res.status(400).json({ error: err.message });
    }
});
// ====== RUTA PARA VIAJES POR MES ======
router.get("/mes", async (req, res) => {
    try {
        await (0, ViajesController_1.obtenerViajesPorMesController)(req, res);
    }
    catch (error) {
        console.error("❌ Error en GET /api/viajes/mes:", error.message);
        res.status(400).json({ error: error.message || "Error al obtener viajes por mes" });
    }
});
// ====== RUTA PARA CONTAR VIAJES POR USUARIO ======
router.get("/usuario/:usuarioId/count", async (req, res) => {
    try {
        await (0, ViajesController_1.contarViajesPorUsuarioController)(req, res);
    }
    catch (error) {
        console.error("❌ Error en GET /api/viajes/usuario/:usuarioId/count:", error.message);
        res.status(400).json({ error: error.message || "Error al contar viajes por usuario" });
    }
});
// ====== RUTA PARA OBTENER VIAJES DE UN USUARIO ======
router.get("/usuario/:usuarioId", async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const viajeRepo = new ViajeRepository_1.ViajeRepository();
        const viajes = await viajeRepo.findByUsuarioId(parseInt(usuarioId));
        res.json(viajes);
    }
    catch (error) {
        console.error("❌ Error en GET /api/viajes/usuario/:usuarioId:", error.message);
        res.status(400).json({ error: "Error al obtener los viajes del usuario" });
    }
});
// ====== RUTA PARA ACTUALIZAR VIAJE ======
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log("📌 Body recibido en PUT /api/viajes/:id:", data);
        // Reutilizar tu servicio de registrar o crear uno nuevo "ActualizarViajeService"
        // Aquí te muestro la versión simple llamando al repositorio directo:
        const viajeRepo = new ViajeRepository_1.ViajeRepository();
        const viaje = await viajeRepo.update(Number(id), data);
        res.status(200).json(viaje);
    }
    catch (err) {
        console.error("❌ Error en PUT /api/viajes/:id:", err.message);
        res.status(400).json({ error: err.message });
    }
});
// ====== RUTA PARA ELIMINAR VIAJE ======
router.delete("/:id", async (req, res) => {
    try {
        const viajeId = parseInt(req.params.id, 10);
        const repo = new ViajeRepository_1.ViajeRepository();
        const viaje = await repo.findByUsuarioId(viajeId);
        if (!viaje) {
            return res.status(404).json({ error: "Viaje no encontrado" });
        }
        await repo.delete(viajeId);
        res.status(200).json({ message: "Viaje eliminado correctamente" });
    }
    catch (err) {
        console.error("❌ Error en DELETE /api/viajes/:id:", err.message);
        res.status(400).json({ error: err.message || "Error al eliminar viaje" });
    }
});
exports.default = router;
//# sourceMappingURL=viajes.routes.js.map