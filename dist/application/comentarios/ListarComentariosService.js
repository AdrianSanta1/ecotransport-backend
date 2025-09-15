"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarComentariosService = void 0;
const ComentarioEntity_1 = require("../../infrastructure/entities/ComentarioEntity");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
class ListarComentariosService {
    async execute(usuarioId) {
        const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
        return await repo.find({ where: { usuarioId } });
    }
}
exports.ListarComentariosService = ListarComentariosService;
//# sourceMappingURL=ListarComentariosService.js.map