"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarViajeService = void 0;
class RegistrarViajeService {
    constructor(viajeRepo, usuarioRepo, tipoRepo) {
        this.viajeRepo = viajeRepo;
        this.usuarioRepo = usuarioRepo;
        this.tipoRepo = tipoRepo;
    }
    async execute(data) {
        const usuario = await this.usuarioRepo.findById(data.usuarioId);
        if (!usuario)
            throw new Error("Usuario no encontrado");
        const tipo = await this.tipoRepo.findById(data.tipoTransporteId);
        if (!tipo)
            throw new Error("Tipo de transporte no encontrado");
        const factor = Number(tipo.factor_emision_co2);
        if (isNaN(factor))
            throw new Error("Factor de emisión inválido");
        const emisionCO2 = data.distanciaKm * factor;
        const viaje = await this.viajeRepo.save({
            ...data,
            fechaViaje: new Date(data.fechaViaje),
            emisionCO2,
        });
        console.log("✅ Viaje guardado:", viaje);
        return viaje;
    }
}
exports.RegistrarViajeService = RegistrarViajeService;
//# sourceMappingURL=RegistrarViajeService.js.map