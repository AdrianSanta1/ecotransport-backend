"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerViajesPorMes = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const obtenerViajesPorMes = async (usuarioId, mes, anio) => {
    return await dependencies_1.viajeRepository.findByMesYUsuario(usuarioId, mes, anio);
};
exports.obtenerViajesPorMes = obtenerViajesPorMes;
//# sourceMappingURL=obtenerViajesPorMes.js.map