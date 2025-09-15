"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajeRepository = void 0;
const Viaje_1 = require("../../domain/entities/Viaje");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const ViajeEntity_1 = require("../entities/ViajeEntity");
const typeorm_1 = require("typeorm");
class ViajeRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
    }
    async save(viaje) {
        const entity = this.repo.create({
            id: viaje.id,
            usuarioId: viaje.usuarioId,
            tipoTransporteId: viaje.tipoTransporteId,
            nombreRuta: viaje.nombreRuta,
            origen: viaje.origen,
            destino: viaje.destino,
            distanciaKm: viaje.distanciaKm,
            fechaViaje: viaje.fechaViaje,
            emisionCO2: viaje.emisionCO2,
            createdAt: viaje.createdAt,
        });
        const saved = await this.repo.save(entity);
        return new Viaje_1.Viaje({
            ...saved,
            tipoTransporte: saved.tipoTransporte ? { nombre: saved.tipoTransporte.nombre } : undefined
        });
    }
    async update(id, data) {
        const repo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
        await repo.update(id, data);
        return await repo.findOneByOrFail({ id });
    }
    async delete(id) {
        await data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity).delete(id);
    }
    async countByUsuario(usuarioId) {
        return this.repo.count({ where: { usuarioId } });
    }
    async findByUsuario(usuarioId) {
        const repo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
        return await repo.find({
            where: { usuario: { id: usuarioId } },
            relations: ["tipoTransporte"],
            order: { fechaViaje: "DESC" }
        });
    }
    async findByUsuarioId(usuarioId) {
        return this.repo.find({
            where: { usuario: { id: usuarioId } },
            relations: ["tipoTransporte"], // 👈 esto asegura que traiga datos del transporte
        });
    }
    async findByMesYUsuario(usuarioId, mes, anio) {
        const inicio = new Date(anio, mes - 1, 1);
        const fin = new Date(anio, mes, 0);
        const results = await this.repo.find({
            where: {
                usuarioId,
                fechaViaje: (0, typeorm_1.Between)(inicio, fin),
            },
            relations: ["tipoTransporte"],
        });
        return results.map((v) => new Viaje_1.Viaje({
            id: v.id,
            usuarioId: v.usuarioId,
            tipoTransporteId: v.tipoTransporteId,
            nombreRuta: v.nombreRuta,
            origen: v.origen,
            destino: v.destino,
            distanciaKm: v.distanciaKm,
            fechaViaje: v.fechaViaje,
            emisionCO2: v.emisionCO2,
            createdAt: v.createdAt,
            tipoTransporte: v.tipoTransporte ? { nombre: v.tipoTransporte.nombre } : undefined,
        }));
    }
}
exports.ViajeRepository = ViajeRepository;
//# sourceMappingURL=ViajeRepository.js.map