"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaFavoritaRepository = void 0;
const RutaFavorita_1 = require("../../domain/entities/RutaFavorita");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const RutaFavoritaEntity_1 = require("../entities/RutaFavoritaEntity");
class RutaFavoritaRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(RutaFavoritaEntity_1.RutaFavoritaEntity);
    }
    // 🔹 Listar todas (no se suele usar directamente)
    async findAll() {
        const entities = await this.repo.find();
        return entities.map(this.toDomain);
    }
    // 🔹 Listar por usuario
    async findByUsuario(usuarioId) {
        const entities = await this.repo.find({ where: { usuarioId } });
        return entities.map(this.toDomain);
    }
    // 🔹 Guardar nueva ruta favorita
    async save(ruta) {
        const entity = this.repo.create({
            usuarioId: ruta.usuarioId,
            viajeId: ruta.viajeId,
            nombreRuta: ruta.nombreRuta,
            origen: ruta.origen,
            destino: ruta.destino,
        });
        const saved = await this.repo.save(entity);
        return this.toDomain(saved);
    }
    // 🔹 Actualizar (si lo necesitas)
    async update(id, data) {
        await this.repo.update(id, {
            nombreRuta: data.nombreRuta,
            origen: data.origen,
            destino: data.destino,
        });
    }
    // 🔹 Eliminar por id
    async delete(id) {
        await this.repo.delete(id);
    }
    // 🔹 Helper: convertir de Entity a Domain
    toDomain(entity) {
        return new RutaFavorita_1.RutaFavorita({
            id: entity.id,
            usuarioId: entity.usuarioId,
            viajeId: entity.viajeId,
            nombreRuta: entity.nombreRuta,
            origen: entity.origen,
            destino: entity.destino,
            created_at: entity.created_at,
        });
    }
}
exports.RutaFavoritaRepository = RutaFavoritaRepository;
//# sourceMappingURL=RutaFavoritaRepository.js.map