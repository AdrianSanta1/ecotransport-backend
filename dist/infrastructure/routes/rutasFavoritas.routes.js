"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RutaFavoritaRepository_1 = require("../adapter/RutaFavoritaRepository");
const AgregarRutaFavoritaService_1 = require("../../application/rutasFavoritas/AgregarRutaFavoritaService");
const ListarRutasFavoritasService_1 = require("../../application/rutasFavoritas/ListarRutasFavoritasService");
const EliminarRutaFavoritaService_1 = require("../../application/rutasFavoritas/EliminarRutaFavoritaService");
const router = (0, express_1.Router)();
const repo = new RutaFavoritaRepository_1.RutaFavoritaRepository();
router.post("/", async (req, res, next) => {
    try {
        const service = new AgregarRutaFavoritaService_1.AgregarRutaFavoritaService(repo);
        const result = await service.execute(req.body);
        res.status(201).json(result);
    }
    catch (e) {
        next(e);
    }
});
// rutasFavoritas.routes.ts
router.get("/usuario/:usuarioId", async (req, res, next) => {
    try {
        const usuarioId = Number(req.params.usuarioId);
        const service = new ListarRutasFavoritasService_1.ListarRutasFavoritasService(repo);
        const result = await service.execute(usuarioId);
        res.json(result);
    }
    catch (e) {
        next(e);
    }
});
router.delete("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const service = new EliminarRutaFavoritaService_1.EliminarRutaFavoritaService(repo);
        await service.execute(id);
        res.status(204).end();
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
//# sourceMappingURL=rutasFavoritas.routes.js.map