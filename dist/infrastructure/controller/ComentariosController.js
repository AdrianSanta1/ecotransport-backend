"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioController = void 0;
const data_source_1 = require("../typeorm/data-source");
const ComentarioEntity_1 = require("../entities/ComentarioEntity");
class ComentarioController {
    static async crear(req, res) {
        try {
            const { usuarioId, comentario } = req.body;
            const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
            const entity = repo.create({ usuarioId, comentario });
            const saved = await repo.save(entity);
            res.status(201).json(saved);
        }
        catch {
            res.status(400).json({ error: "No se pudo crear el comentario" });
        }
    }
    static async listarPorUsuario(req, res) {
        try {
            const usuarioId = Number(req.params.usuarioId);
            const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
            const rows = await repo.find({
                where: { usuarioId },
                order: { createdAt: "ASC" },
            });
            res.json(rows);
        }
        catch {
            res.status(500).json({ error: "No se pudieron obtener los comentarios" });
        }
    }
    static async actualizar(req, res) {
        try {
            const id = Number(req.params.id);
            const { comentario } = req.body;
            const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
            await repo.update(id, { comentario });
            const updated = await repo.findOne({ where: { id } });
            res.json(updated);
        }
        catch {
            res.status(400).json({ error: "No se pudo actualizar el comentario" });
        }
    }
    static async eliminar(req, res) {
        try {
            const id = Number(req.params.id);
            const repo = data_source_1.AppDataSource.getRepository(ComentarioEntity_1.ComentarioEntity);
            await repo.delete(id);
            res.status(204).end();
        }
        catch {
            res.status(400).json({ error: "No se pudo eliminar el comentario" });
        }
    }
}
exports.ComentarioController = ComentarioController;
//# sourceMappingURL=ComentariosController.js.map