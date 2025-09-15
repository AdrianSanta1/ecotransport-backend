"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListarTiposTransporteService_1 = require("../../application/tiposTransporte/ListarTiposTransporteService");
const ActualizarTipoTransporteService_1 = require("../../application/tiposTransporte/ActualizarTipoTransporteService");
const TipoTransporteRepository_1 = require("../adapter/TipoTransporteRepository");
const TiposTransporteController_1 = require("../controller/TiposTransporteController");
const router = (0, express_1.Router)();
const repo = new TipoTransporteRepository_1.TipoTransporteRepository();
router.get("/", async (_, res, next) => {
    try {
        const service = new ListarTiposTransporteService_1.ListarTiposTransporteService(repo);
        const result = await service.execute();
        res.json(result);
    }
    catch (e) {
        next(e);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const { factor_emision_co2 } = req.body;
        const service = new ActualizarTipoTransporteService_1.ActualizarTipoTransporteService(repo);
        await service.execute({ id, factor_emision_co2 });
        res.status(204).end();
    }
    catch (e) {
        next(e);
    }
});
router.get("/", TiposTransporteController_1.listarTiposTransporteController);
exports.default = router;
//# sourceMappingURL=tiposTransporte.routes.js.map