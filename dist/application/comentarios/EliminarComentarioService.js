"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarComentarioService = void 0;
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const ComentarioEntity_1 = require("../../infrastructure/entities/ComentarioEntity");
class EliminarComentarioService {
    async execute(id) {
        const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
        const existente = await repo.findOne({ where: { id } });
        if (!existente) {
            throw new Error("Comentario no encontrado");
        }
        await repo.delete(id);
    }
}
exports.EliminarComentarioService = EliminarComentarioService;
//# sourceMappingURL=EliminarComentarioService.js.map