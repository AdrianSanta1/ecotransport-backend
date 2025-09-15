"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaFavoritaRepository = exports.viajeRepository = exports.usuarioRepository = exports.tipoTransporteRepository = exports.reporteRepository = exports.comentarioRepository = void 0;
const ComentarioRepository_1 = require("./adapter/ComentarioRepository");
const ReporteRepository_1 = require("./adapter/ReporteRepository");
const TipoTransporteRepository_1 = require("./adapter/TipoTransporteRepository");
const UsuarioRepository_1 = require("./adapter/UsuarioRepository");
const ViajeRepository_1 = require("./adapter/ViajeRepository");
const RutaFavoritaRepository_1 = require("./adapter/RutaFavoritaRepository");
// Instancias concretas de los repositorios
exports.comentarioRepository = new ComentarioRepository_1.ComentarioRepository();
exports.reporteRepository = new ReporteRepository_1.ReporteRepository();
exports.tipoTransporteRepository = new TipoTransporteRepository_1.TipoTransporteRepository();
exports.usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
exports.viajeRepository = new ViajeRepository_1.ViajeRepository();
exports.rutaFavoritaRepository = new RutaFavoritaRepository_1.RutaFavoritaRepository();
//# sourceMappingURL=dependencies.js.map