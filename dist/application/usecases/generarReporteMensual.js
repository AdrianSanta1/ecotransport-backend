"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarReporteMensual = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const Reporte_1 = require("../../domain/entities/Reporte");
const generarReporteMensual = async (usuarioId, mes, anio) => {
    const inicio = new Date(anio, mes - 1, 1);
    const fin = new Date(anio, mes, 0);
    const viajes = await dependencies_1.viajeRepository.findByMesYUsuario(usuarioId, mes, anio);
    const totalCO2 = viajes.reduce((acc, v) => acc + Number(v.emisionCO2), 0);
    const totalDistancia = viajes.reduce((acc, v) => acc + Number(v.distanciaKm), 0);
    const totalViajes = viajes.length;
    // Calcular transporte más usado
    const conteoTransporte = {};
    const emisionTransporte = {};
    for (const viaje of viajes) {
        if (viaje.tipoTransporte && viaje.tipoTransporte.nombre) {
            const nombre = viaje.tipoTransporte.nombre;
            conteoTransporte[nombre] = (conteoTransporte[nombre] || 0) + 1;
            emisionTransporte[nombre] = (emisionTransporte[nombre] || 0) + Number(viaje.emisionCO2);
        }
    }
    const transporteMasUsado = Object.entries(conteoTransporte).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    const transporteMasContaminante = Object.entries(emisionTransporte).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    return new Reporte_1.Reporte({
        usuarioId,
        fechaInicio: inicio,
        fechaFin: fin,
        totalViajes,
        totalDistancia,
        totalCO2,
        transporteMasUsado,
        transporteMasContaminante,
    });
};
exports.generarReporteMensual = generarReporteMensual;
//# sourceMappingURL=generarReporteMensual.js.map