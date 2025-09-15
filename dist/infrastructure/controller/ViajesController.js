"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contarViajesPorUsuarioController = exports.obtenerViajesPorMesController = exports.registrarViajeController = void 0;
const registrarViaje_1 = require("../../application/usecases/registrarViaje");
const obtenerViajesPorMes_1 = require("../../application/usecases/obtenerViajesPorMes");
const contarViajesPorUsuario_1 = require("../../application/usecases/contarViajesPorUsuario");
const registrarViajeController = async (req, res) => {
    try {
        const viajeData = req.body;
        const viaje = await (0, registrarViaje_1.registrarViaje)(viajeData);
        res.status(201).json(viaje);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.registrarViajeController = registrarViajeController;
const obtenerViajesPorMesController = async (req, res) => {
    try {
        const { usuarioId, mes, anio } = req.query;
        const viajes = await (0, obtenerViajesPorMes_1.obtenerViajesPorMes)(Number(usuarioId), Number(mes), Number(anio));
        res.json(viajes);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.obtenerViajesPorMesController = obtenerViajesPorMesController;
const contarViajesPorUsuarioController = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const total = await (0, contarViajesPorUsuario_1.contarViajesPorUsuario)(Number(usuarioId));
        res.json({ total });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.contarViajesPorUsuarioController = contarViajesPorUsuarioController;
//# sourceMappingURL=ViajesController.js.map