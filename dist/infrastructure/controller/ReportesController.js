"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteController = void 0;
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const ReporteEntity_1 = require("../entities/ReporteEntity");
const ViajeEntity_1 = require("../entities/ViajeEntity");
const typeorm_1 = require("typeorm");
class ReporteController {
    // Crear un reporte mensual
    static async crear(req, res) {
        try {
            const { usuarioId } = req.body;
            if (!usuarioId) {
                return res.status(400).json({ error: "usuarioId es requerido" });
            }
            // Fechas del mes actual
            const fechaInicio = new Date();
            fechaInicio.setDate(1);
            fechaInicio.setHours(0, 0, 0, 0);
            const fechaFin = new Date(fechaInicio);
            fechaFin.setMonth(fechaFin.getMonth() + 1);
            fechaFin.setDate(0);
            fechaFin.setHours(23, 59, 59, 999);
            const viajeRepo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
            const viajes = await viajeRepo.find({
                where: {
                    usuarioId,
                    fechaViaje: (0, typeorm_1.Between)(fechaInicio, fechaFin),
                },
                relations: ["tipoTransporte"],
            });
            const totalViajes = viajes.length;
            const totalDistancia = viajes.reduce((sum, v) => sum + Number(v.distanciaKm || 0), 0);
            const totalCO2 = viajes.reduce((sum, v) => sum + Number(v.emisionCO2 || 0), 0);
            const conteo = {};
            let transporteMasContaminante = "";
            let maxCO2 = 0;
            viajes.forEach((v) => {
                const tipo = v.tipoTransporte?.nombre || "Desconocido";
                conteo[tipo] = (conteo[tipo] || 0) + 1;
                if (Number(v.emisionCO2) > maxCO2) {
                    maxCO2 = Number(v.emisionCO2);
                    transporteMasContaminante = tipo;
                }
            });
            const transporteMasUsado = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
            const repo = data_source_1.AppDataSource.getRepository(ReporteEntity_1.ReporteEntity);
            const reporte = repo.create({
                usuarioId,
                fechaInicio,
                fechaFin,
                totalViajes,
                totalDistancia,
                totalCO2,
                transporteMasUsado,
                transporteMasContaminante,
            });
            const saved = await repo.save(reporte);
            res.status(201).json(saved);
        }
        catch (err) {
            console.error("Error al crear reporte:", err);
            res.status(500).json({ error: "Error al crear el reporte" });
        }
    }
    // Listar reportes por usuario
    static async listarPorUsuario(req, res) {
        try {
            const usuarioId = Number(req.params.usuarioId);
            if (isNaN(usuarioId)) {
                return res.status(400).json({ error: "usuarioId inválido" });
            }
            const repo = data_source_1.AppDataSource.getRepository(ReporteEntity_1.ReporteEntity);
            const reportes = await repo.find({
                where: { usuarioId },
                order: { createdAt: "DESC" },
            });
            res.json(reportes);
        }
        catch (err) {
            console.error("Error al obtener reportes:", err);
            res.status(500).json({ error: "Error al obtener reportes" });
        }
    }
    // Eliminar reporte
    static async eliminar(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "id inválido" });
            }
            const repo = data_source_1.AppDataSource.getRepository(ReporteEntity_1.ReporteEntity);
            await repo.delete(id);
            res.json({ message: "Reporte eliminado correctamente" });
        }
        catch (err) {
            console.error("Error al eliminar reporte:", err);
            res.status(500).json({ error: "Error al eliminar reporte" });
        }
    }
    // 🔥 Nuevo: Obtener CO₂ semanal dentro del rango de un reporte
    static async co2Semanal(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "id inválido" });
            }
            const repo = data_source_1.AppDataSource.getRepository(ReporteEntity_1.ReporteEntity);
            const reporte = await repo.findOne({ where: { id } });
            if (!reporte) {
                return res.status(404).json({ error: "Reporte no encontrado" });
            }
            const viajeRepo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
            const viajes = await viajeRepo.find({
                where: {
                    usuarioId: reporte.usuarioId,
                    fechaViaje: (0, typeorm_1.Between)(reporte.fechaInicio, reporte.fechaFin),
                },
            });
            // Agrupar viajes por semana
            const semanas = [0, 0, 0, 0]; // 4 semanas
            const start = new Date(reporte.fechaInicio);
            viajes.forEach((v) => {
                const fecha = new Date(v.fechaViaje);
                const diffDays = Math.floor((fecha.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
                const semanaIndex = Math.min(Math.floor(diffDays / 7), 3);
                semanas[semanaIndex] += Number(v.emisionCO2 || 0);
            });
            res.json({
                reporteId: id,
                semanas: [
                    { semana: "Semana 1", co2: semanas[0] },
                    { semana: "Semana 2", co2: semanas[1] },
                    { semana: "Semana 3", co2: semanas[2] },
                    { semana: "Semana 4", co2: semanas[3] },
                ],
            });
        }
        catch (err) {
            console.error("Error al obtener CO₂ semanal:", err);
            res.status(500).json({ error: "Error al obtener CO₂ semanal" });
        }
    }
}
exports.ReporteController = ReporteController;
//# sourceMappingURL=ReportesController.js.map