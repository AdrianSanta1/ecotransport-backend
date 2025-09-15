"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarComentarioService = void 0;
const ComentarioEntity_1 = require("../../infrastructure/entities/ComentarioEntity");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
class EditarComentarioService {
    async execute(id, comentario) {
        const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
        const existente = await repo.findOne({ where: { id } });
        if (!existente) {
            throw new Error("Comentario no encontrado");
        }
        existente.comentario = comentario;
        return await repo.save(existente);
    }
}
exports.EditarComentarioService = EditarComentarioService;
//# sourceMappingURL=EditarComentarioService.js.map