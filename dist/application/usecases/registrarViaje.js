"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarViaje = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const Viaje_1 = require("../../domain/entities/Viaje");
const registrarViaje = async (data) => {
    const viaje = new Viaje_1.Viaje(data);
    return await dependencies_1.viajeRepository.save(viaje);
};
exports.registrarViaje = registrarViaje;
//# sourceMappingURL=registrarViaje.js.map