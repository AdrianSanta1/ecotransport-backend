"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarRutasFavoritas = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const listarRutasFavoritas = async () => {
    return await dependencies_1.rutaFavoritaRepository.findAll();
};
exports.listarRutasFavoritas = listarRutasFavoritas;
//# sourceMappingURL=listarRutasFavoritas.js.map