"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contarViajesPorUsuario = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const contarViajesPorUsuario = async (usuarioId) => {
    return await dependencies_1.viajeRepository.countByUsuario(usuarioId);
};
exports.contarViajesPorUsuario = contarViajesPorUsuario;
//# sourceMappingURL=contarViajesPorUsuario.js.map