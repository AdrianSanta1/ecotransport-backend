import "reflect-metadata";
import { DataSource } from "typeorm";

// Importa tus entidades del dominio
import { UsuarioEntity } from "../entities/UsuarioEntity";
import { ViajeEntity } from "../entities/ViajeEntity";
import { TipoTransporteEntity } from "../entities/TipoTransporteEntity";
import { ReporteEntity } from "../entities/ReporteEntity";
import { ComentarioEntity } from "../entities/ComentarioEntity";
import { RutaFavoritaEntity } from "../entities/RutaFavoritaEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "12345",
  database: process.env.DB_NAME || "ecotransport_db",
  synchronize: true, // ⚠️ SOLO en desarrollo (genera tablas automáticamente)
  logging: process.env.DB_LOGGING === "true",
  entities: [
    UsuarioEntity,
    RutaFavoritaEntity,
    ComentarioEntity,
    ReporteEntity,
    TipoTransporteEntity,
    ViajeEntity
  ],
  migrations: ["src/infrastructure/typeorm/migrations/*.ts"],
  subscribers: [],
});


