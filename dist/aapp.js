"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = require("body-parser");
const errorHandler_1 = require("./infrastructure/shared/errorHandler");
const auth_routes_1 = __importDefault(require("./infrastructure/routes/auth.routes"));
const viajes_routes_1 = __importDefault(require("./infrastructure/routes/viajes.routes"));
const comentarios_routes_1 = __importDefault(require("./infrastructure/routes/comentarios.routes"));
const reportes_routes_1 = __importDefault(require("./infrastructure/routes/reportes.routes"));
const tiposTransporte_routes_1 = __importDefault(require("./infrastructure/routes/tiposTransporte.routes"));
const usuario_routes_1 = __importDefault(require("./infrastructure/routes/usuario.routes"));
const rutasFavoritas_routes_1 = __importDefault(require("./infrastructure/routes/rutasFavoritas.routes"));
const comentarios_routes_2 = __importDefault(require("./infrastructure/routes/comentarios.routes"));
const reportes_routes_2 = __importDefault(require("./infrastructure/routes/reportes.routes"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
// Rutas
app.use("/api/auth", auth_routes_1.default);
app.use("/api/viajes", viajes_routes_1.default);
app.use("/api/comentarios", comentarios_routes_1.default);
app.use("/api/reportes", reportes_routes_1.default);
app.use("/api/tipos-transporte", tiposTransporte_routes_1.default);
app.use("/api/usuarios", usuario_routes_1.default);
app.use("/api/rutas-favoritas", rutasFavoritas_routes_1.default);
app.use("/api/comentarios", comentarios_routes_2.default);
app.use("/api/reportes", reportes_routes_2.default);
// Manejo de errores
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=aapp.js.map