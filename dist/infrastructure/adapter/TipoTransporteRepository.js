"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransporteRepository = void 0;
const TipoTransporte_1 = require("../../domain/entities/TipoTransporte");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const TipoTransporteEntity_1 = require("../entities/TipoTransporteEntity");
// --- Helpers para validar ---
const allowed = new Set(["car", "bus", "bicycle", "walk"]);
const normalizeNombre = (s) => s.toLowerCase().trim();
function toDomainProps(e) {
    const n = normalizeNombre(e.nombre);
    if (!allowed.has(n)) {
        throw new Error(`TipoTransporte.nombre inválido: ${e.nombre}`);
    }
    return {
        id: e.id,
        nombre: n,
        factor_emision_co2: Number(e.factor_emision_co2),
    };
}
class TipoTransporteRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(TipoTransporteEntity_1.TipoTransporteEntity);
    }
    async findAll() {
        const results = await this.repo.find();
        return results.map((r) => new TipoTransporte_1.TipoTransporte(toDomainProps(r)));
    }
    async findById(id) {
        const result = await this.repo.findOneBy({ id });
        return result ? new TipoTransporte_1.TipoTransporte(toDomainProps(result)) : null;
    }
    async getFactorEmision(id) {
        const t = await this.repo.findOneBy({ id });
        if (!t)
            throw new Error("Tipo transporte no encontrado");
        return Number(t.factor_emision_co2);
    }
    async save(transporte) {
        const dto = {
            id: transporte.id,
            nombre: transporte.nombre,
            factor_emision_co2: Number(transporte.factor_emision_co2),
        };
        const saved = await this.repo.save(dto);
        return new TipoTransporte_1.TipoTransporte(toDomainProps(saved));
    }
    async update(id, data) {
        const patch = {};
        if (data.nombre !== undefined) {
            patch.nombre = data.nombre;
        }
        if (data.factor_emision_co2 !== undefined) {
            patch.factor_emision_co2 = Number(data.factor_emision_co2);
        }
        await this.repo.update(id, patch);
    }
    async delete(id) {
        // Borrado lógico: seteamos factor en 0
        await this.repo.update(id, { factor_emision_co2: 0 });
    }
}
exports.TipoTransporteRepository = TipoTransporteRepository;
//# sourceMappingURL=TipoTransporteRepository.js.map