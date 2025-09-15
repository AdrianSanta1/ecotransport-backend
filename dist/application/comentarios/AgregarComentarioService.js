"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarComentarioService = void 0;
const ComentarioEntity_1 = require("../../infrastructure/entities/ComentarioEntity");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
class AgregarComentarioService {
    async execute(usuarioId, comentario) {
        const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
        const nuevo = repo.create({ usuarioId, comentario });
        return await repo.save(nuevo);
    }
}
exports.AgregarComentarioService = AgregarComentarioService;
//# sourceMappingURL=AgregarComentarioService.js.map