"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// Importa tus entidades del dominio
const UsuarioEntity_1 = require("../entities/UsuarioEntity");
const ViajeEntity_1 = require("../entities/ViajeEntity");
const TipoTransporteEntity_1 = require("../entities/TipoTransporteEntity");
const ReporteEntity_1 = require("../entities/ReporteEntity");
const ComentarioEntity_1 = require("../entities/ComentarioEntity");
const RutaFavoritaEntity_1 = require("../entities/RutaFavoritaEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "12345",
    database: process.env.DB_NAME || "ecotransport_db",
    synchronize: true, // ⚠️ SOLO en desarrollo (genera tablas automáticamente)
    logging: process.env.DB_LOGGING === "true",
    entities: [
        UsuarioEntity_1.UsuarioEntity,
        RutaFavoritaEntity_1.RutaFavoritaEntity,
        ComentarioEntity_1.ComentarioEntity,
        ReporteEntity_1.ReporteEntity,
        TipoTransporteEntity_1.TipoTransporteEntity,
        ViajeEntity_1.ViajeEntity
    ],
    migrations: ["src/infrastructure/typeorm/migrations/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map