import { Router, Request, Response } from "express";
import {
  obtenerViajesPorMesController,
  contarViajesPorUsuarioController,
} from "../controller/ViajesController";
import { RegistrarViajeService } from "../../application/viajes/RegistrarViajeService";
import { ViajeRepository } from "../adapter/ViajeRepository";
import { UsuarioRepository } from "../adapter/UsuarioRepository";
import { TipoTransporteRepository } from "../adapter/TipoTransporteRepository";

const router = Router();

// 👇 Instancia del servicio (no la clase)
const viajeService = new RegistrarViajeService(
  new ViajeRepository(),
  new UsuarioRepository(),
  new TipoTransporteRepository()
);

// ====== RUTA PARA REGISTRAR VIAJE ======
router.post("/", async (req: Request, res: Response) => {
  try {

    const viaje = await viajeService.execute(req.body); // ✅ ya es instancia

    res.status(201).json(viaje);
  } catch (err: any) {
    console.error("❌ Error en POST /api/viajes:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// ====== RUTA PARA VIAJES POR MES ======
router.get("/mes", async (req: Request, res: Response) => {
  try {
    await obtenerViajesPorMesController(req, res);
  } catch (error: any) {
    console.error("❌ Error en GET /api/viajes/mes:", error.message);
    res.status(400).json({ error: error.message || "Error al obtener viajes por mes" });
  }
});

// ====== RUTA PARA CONTAR VIAJES POR USUARIO ======
router.get("/usuario/:usuarioId/count", async (req: Request, res: Response) => {
  try {
    await contarViajesPorUsuarioController(req, res);
  } catch (error: any) {
    console.error("❌ Error en GET /api/viajes/usuario/:usuarioId/count:", error.message);
    res.status(400).json({ error: error.message || "Error al contar viajes por usuario" });
  }
});

// ====== RUTA PARA OBTENER VIAJES DE UN USUARIO ======
router.get("/usuario/:usuarioId", async (req: Request, res: Response) => {
  try {
    const { usuarioId } = req.params;

    const viajeRepo = new ViajeRepository();
    const viajes = await viajeRepo.findByUsuarioId(parseInt(usuarioId));

    res.json(viajes);
  } catch (error: any) {
    console.error("❌ Error en GET /api/viajes/usuario/:usuarioId:", error.message);
    res.status(400).json({ error: "Error al obtener los viajes del usuario" });
  }
});

// ====== RUTA PARA ACTUALIZAR VIAJE ======
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    console.log("📌 Body recibido en PUT /api/viajes/:id:", data);

    // Reutilizar tu servicio de registrar o crear uno nuevo "ActualizarViajeService"
    // Aquí te muestro la versión simple llamando al repositorio directo:

    const viajeRepo = new ViajeRepository();
    const viaje = await viajeRepo.update(Number(id), data);

    res.status(200).json(viaje);
  } catch (err: any) {
    console.error("❌ Error en PUT /api/viajes/:id:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// ====== RUTA PARA ELIMINAR VIAJE ======
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const viajeId = parseInt(req.params.id, 10);

    const repo = new ViajeRepository();
    const viaje = await repo.findByUsuarioId(viajeId);
    if (!viaje) {
      return res.status(404).json({ error: "Viaje no encontrado" });
    }

    await repo.delete(viajeId);
    res.status(200).json({ message: "Viaje eliminado correctamente" });
  } catch (err: any) {
    console.error("❌ Error en DELETE /api/viajes/:id:", err.message);
    res.status(400).json({ error: err.message || "Error al eliminar viaje" });
  }
});


export default router;
