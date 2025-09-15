"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearRutaFavorita = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const RutaFavorita_1 = require("../../domain/entities/RutaFavorita");
const crearRutaFavorita = async (data) => {
    const ruta = new RutaFavorita_1.RutaFavorita(data);
    return await dependencies_1.rutaFavoritaRepository.save(ruta);
};
exports.crearRutaFavorita = crearRutaFavorita;
//# sourceMappingURL=crearRutaFavorita.js.map