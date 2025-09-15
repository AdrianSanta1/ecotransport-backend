"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarRutaFavoritaService = void 0;
class EliminarRutaFavoritaService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        if (!id) {
            throw new Error("id es obligatorio");
        }
        await this.repo.delete(id);
    }
}
exports.EliminarRutaFavoritaService = EliminarRutaFavoritaService;
//# sourceMappingURL=EliminarRutaFavoritaService.js.map