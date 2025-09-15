"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteRepository = void 0;
const Reporte_1 = require("../../domain/entities/Reporte");
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const ReporteEntity_1 = require("../entities/ReporteEntity");
class ReporteRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(ReporteEntity_1.ReporteEntity);
    }
    async save(reporte) {
        const entity = this.repo.create(reporte);
        const saved = await this.repo.save(entity);
        return new Reporte_1.Reporte(saved);
    }
}
exports.ReporteRepository = ReporteRepository;
//# sourceMappingURL=ReporteRepository.js.map