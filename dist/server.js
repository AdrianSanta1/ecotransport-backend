"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const data_source_1 = require("./infrastructure/typeorm/data-source");
// ==== Rutas ====
const usuario_routes_1 = __importDefault(require("./infrastructure/routes/usuario.routes"));
const auth_routes_1 = __importDefault(require("./infrastructure/routes/auth.routes"));
const viajes_routes_1 = __importDefault(require("./infrastructure/routes/viajes.routes"));
const rutasFavoritas_routes_1 = __importDefault(require("./infrastructure/routes/rutasFavoritas.routes"));
const comentarios_routes_1 = __importDefault(require("./infrastructure/routes/comentarios.routes"));
const reportes_routes_1 = __importDefault(require("./infrastructure/routes/reportes.routes"));
// ==== Config ====
const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
exports.app = (0, express_1.default)();
// ===== Middlewares globales =====
exports.app.set("trust proxy", 1);
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use((0, compression_1.default)());
exports.app.use(express_1.default.json({ limit: "2mb" }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, morgan_1.default)(NODE_ENV === "production" ? "combined" : "dev"));
// ===== Healthcheck =====
exports.app.get("/health", (_req, res) => {
    res.status(200).json({
        ok: true,
        service: "EcoTransport API",
        env: NODE_ENV,
        ts: new Date().toISOString(),
    });
});
// ===== Bootstrap =====
async function start() {
    try {
        console.log("🚀 Iniciando servidor...");
        if (!data_source_1.AppDataSource.isInitialized) {
            await data_source_1.AppDataSource.initialize();
            console.log("✅ TypeORM DataSource inicializado");
        }
        // 👇 Montamos rutas después de inicializar DB
        exports.app.use("/api/auth", auth_routes_1.default);
        exports.app.use("/api/usuarios", usuario_routes_1.default);
        exports.app.use("/api/viajes", viajes_routes_1.default);
        exports.app.use("/api/rutas-favoritas", rutasFavoritas_routes_1.default);
        exports.app.use("/api/comentarios", comentarios_routes_1.default);
        exports.app.use("/api/reportes", reportes_routes_1.default);
        // ===== 404 handler =====
        exports.app.use((req, res) => {
            res.status(404).json({
                ok: false,
                error: `No se encontró la ruta: ${req.method} ${req.originalUrl}`,
            });
        });
        // ===== Error handler central =====
        exports.app.use((err, _req, res, _next) => {
            const message = err instanceof Error
                ? err.message
                : typeof err === "string"
                    ? err
                    : "Internal Server Error";
            const payload = { ok: false, error: message };
            if (NODE_ENV !== "production" && err instanceof Error) {
                payload.stack = err.stack;
            }
            res.status(500).json(payload);
        });
        // ===== Start server =====
        exports.app.listen(PORT, () => {
            console.log(`🚀 EcoTransport API corriendo en http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Error inicializando el servidor o la BD:", error);
        process.exit(1);
    }
}
// ✅ Ejecuta `start()` solo si este archivo es el entrypoint principal
if (require.main === module) {
    start();
}
//# sourceMappingURL=server.js.map