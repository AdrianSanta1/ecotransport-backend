"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTiposTransporte = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const listarTiposTransporte = async () => {
    return await dependencies_1.tipoTransporteRepository.findAll();
};
exports.listarTiposTransporte = listarTiposTransporte;
//# sourceMappingURL=listarTiposTransporte.js.map