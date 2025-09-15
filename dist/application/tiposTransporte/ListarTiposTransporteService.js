"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarTiposTransporteService = void 0;
class ListarTiposTransporteService {
    constructor(tipoTransporteRepo) {
        this.tipoTransporteRepo = tipoTransporteRepo;
    }
    async execute() {
        return this.tipoTransporteRepo.findAll();
    }
}
exports.ListarTiposTransporteService = ListarTiposTransporteService;
//# sourceMappingURL=ListarTiposTransporteService.js.map