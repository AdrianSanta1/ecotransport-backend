"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarRutasFavoritasService = void 0;
class ListarRutasFavoritasService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(usuarioId) {
        if (!usuarioId) {
            throw new Error("usuarioId es obligatorio");
        }
        return this.repo.findByUsuario(usuarioId);
    }
}
exports.ListarRutasFavoritasService = ListarRutasFavoritasService;
//# sourceMappingURL=ListarRutasFavoritasService.js.map