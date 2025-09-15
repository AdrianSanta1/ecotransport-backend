
import { Router } from "express";
import { RutaFavoritaRepository } from "../adapter/RutaFavoritaRepository";
import { AgregarRutaFavoritaService } from "../../application/rutasFavoritas/AgregarRutaFavoritaService";
import { ListarRutasFavoritasService } from "../../application/rutasFavoritas/ListarRutasFavoritasService";
import { EliminarRutaFavoritaService } from "../../application/rutasFavoritas/EliminarRutaFavoritaService";

const router = Router();
const repo = new RutaFavoritaRepository();

router.post("/", async (req, res, next) => {
  try {
    const service = new AgregarRutaFavoritaService(repo);
    const result = await service.execute(req.body);
    res.status(201).json(result);
  } catch (e) { next(e); }
});

// rutasFavoritas.routes.ts
router.get("/usuario/:usuarioId", async (req, res, next) => {
  try {
    const usuarioId = Number(req.params.usuarioId);
    const service = new ListarRutasFavoritasService(repo);
    const result = await service.execute(usuarioId);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const service = new EliminarRutaFavoritaService(repo);
    await service.execute(id);
    res.status(204).end();
  } catch (e) { next(e); }
});

export default router;

