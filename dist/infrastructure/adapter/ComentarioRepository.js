"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioRepository = void 0;
const Comentario_1 = require("../../domain/entities/Comentario");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const ComentarioEntity_1 = require("../entities/ComentarioEntity");
class ComentarioRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
    }
    async save(comentario) {
        const entity = this.repo.create({
            id: comentario.id,
            usuarioId: comentario.usuarioId,
            comentario: comentario.comentario,
            createdAt: comentario.createdAt,
        });
        const saved = await this.repo.save(entity);
        return new Comentario_1.Comentario(saved);
    }
    async findAll() {
        const results = await this.repo.find();
        return results.map((r) => new Comentario_1.Comentario({
            id: r.id,
            usuarioId: r.usuarioId,
            comentario: r.comentario,
            createdAt: r.createdAt,
        }));
    }
    async findByUsuario(usuarioId) {
        const results = await this.repo.find({ where: { usuarioId } });
        return results.map((r) => new Comentario_1.Comentario({
            id: r.id,
            usuarioId: r.usuarioId,
            comentario: r.comentario,
            createdAt: r.createdAt,
        }));
    }
}
exports.ComentarioRepository = ComentarioRepository;
//# sourceMappingURL=ComentarioRepository.js.map