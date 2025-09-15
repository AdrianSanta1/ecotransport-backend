"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarRutaFavoritaService = void 0;
const RutaFavorita_1 = require("../../domain/entities/RutaFavorita");
class AgregarRutaFavoritaService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(data) {
        if (!data.usuarioId || !data.viajeId) {
            throw new Error("usuarioId y viajeId son obligatorios");
        }
        const ruta = new RutaFavorita_1.RutaFavorita({
            usuarioId: data.usuarioId,
            viajeId: data.viajeId,
            nombreRuta: data.nombreRuta,
            origen: data.origen,
            destino: data.destino,
        });
        return this.repo.save(ruta);
    }
}
exports.AgregarRutaFavoritaService = AgregarRutaFavoritaService;
//# sourceMappingURL=AgregarRutaFavoritaService.js.map