"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarTipoTransporteService = void 0;
class ActualizarTipoTransporteService {
    constructor(tipoTransporteRepo) {
        this.tipoTransporteRepo = tipoTransporteRepo;
    }
    async execute(input) {
        await this.tipoTransporteRepo.update(input.id, {
            factor_emision_co2: input.factor_emision_co2,
        });
    }
}
exports.ActualizarTipoTransporteService = ActualizarTipoTransporteService;
//# sourceMappingURL=ActualizarTipoTransporteService.js.map