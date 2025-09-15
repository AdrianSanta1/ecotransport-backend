import express from "express";
import cors from "cors";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import { errorHandler } from "./infrastructure/shared/errorHandler";
import authRouter from "./infrastructure/routes/auth.routes";
import viajesRouter from "./infrastructure/routes/viajes.routes";
import comentariosRouter from "./infrastructure/routes/comentarios.routes";
import reportesRouter from "./infrastructure/routes/reportes.routes";
import tiposTransporteRouter from "./infrastructure/routes/tiposTransporte.routes";
import usuarioRoutes from "./infrastructure/routes/usuario.routes";
import rutasFavoritasRouter from "./infrastructure/routes/rutasFavoritas.routes"
import comentariosRoutes from "./infrastructure/routes/comentarios.routes";
import reportesRoutes from "./infrastructure/routes/reportes.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", authRouter);
app.use("/api/viajes", viajesRouter);
app.use("/api/comentarios", comentariosRouter);
app.use("/api/reportes", reportesRouter);
app.use("/api/tipos-transporte", tiposTransporteRouter);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/rutas-favoritas", rutasFavoritasRouter);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/reportes", reportesRoutes)
// Manejo de errores
app.use(errorHandler);

export default app;
