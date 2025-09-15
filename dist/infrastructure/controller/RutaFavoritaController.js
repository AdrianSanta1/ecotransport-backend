"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaFavoritaController = void 0;
const crearRutaFavorita_1 = require("../../application/usecases/crearRutaFavorita");
const listarRutasFavoritas_1 = require("../../application/usecases/listarRutasFavoritas");
class RutaFavoritaController {
    static async crear(req, res) {
        try {
            const ruta = await (0, crearRutaFavorita_1.crearRutaFavorita)(req.body);
            res.status(201).json(ruta);
        }
        catch (err) {
            res.status(500).json({ error: "Error al crear la ruta favorita" });
        }
    }
    static async listar(req, res) {
        try {
            const rutas = await (0, listarRutasFavoritas_1.listarRutasFavoritas)();
            res.json(rutas);
        }
        catch (err) {
            res.status(500).json({ error: "Error al obtener las rutas favoritas" });
        }
    }
}
exports.RutaFavoritaController = RutaFavoritaController;
//# sourceMappingURL=RutaFavoritaController.js.map