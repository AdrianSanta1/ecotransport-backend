"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTiposTransporteController = void 0;
const listarTiposTransporte_1 = require("../../application/usecases/listarTiposTransporte");
const listarTiposTransporteController = async (_req, res) => {
    try {
        const tipos = await (0, listarTiposTransporte_1.listarTiposTransporte)();
        res.json(tipos);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.listarTiposTransporteController = listarTiposTransporteController;
//# sourceMappingURL=TiposTransporteController.js.map