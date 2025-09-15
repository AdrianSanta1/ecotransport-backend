import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { AppDataSource } from "./infrastructure/typeorm/data-source";

// ==== Rutas ====
import usuarioRoutes from "./infrastructure/routes/usuario.routes";
import authRoutes from "./infrastructure/routes/auth.routes";
import viajeRoutes from "./infrastructure/routes/viajes.routes"; 
import rutasFavoritasRouter from "./infrastructure/routes/rutasFavoritas.routes"
import comentariosRoutes from "./infrastructure/routes/comentarios.routes";
import reportesRoutes from "./infrastructure/routes/reportes.routes";

// ==== Config ====
const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

export const app = express();

// ===== Middlewares globales =====
app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));

// ===== Healthcheck =====
app.get("/health", (_req, res) => {
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

    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("✅ TypeORM DataSource inicializado");
    }

    // 👇 Montamos rutas después de inicializar DB
    app.use("/api/auth", authRoutes);
    app.use("/api/usuarios", usuarioRoutes);
    app.use("/api/viajes", viajeRoutes);
    app.use("/api/rutas-favoritas", rutasFavoritasRouter);
    app.use("/api/comentarios", comentariosRoutes);
    app.use("/api/reportes", reportesRoutes)

    // ===== 404 handler =====
    app.use((req, res) => {
      res.status(404).json({
        ok: false,
        error: `No se encontró la ruta: ${req.method} ${req.originalUrl}`,
      });
    });

    // ===== Error handler central =====
    app.use(
      (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
        const message =
          err instanceof Error
            ? err.message
            : typeof err === "string"
            ? err
            : "Internal Server Error";

        const payload: Record<string, unknown> = { ok: false, error: message };
        if (NODE_ENV !== "production" && err instanceof Error) {
          payload.stack = err.stack;
        }
        res.status(500).json(payload);
      }
    );

    // ===== Start server =====
    app.listen(PORT, () => {
      console.log(`🚀 EcoTransport API corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error inicializando el servidor o la BD:", error);
    process.exit(1);
  }
}

// ✅ Ejecuta `start()` solo si este archivo es el entrypoint principal
if (require.main === module) {
  start();
}
