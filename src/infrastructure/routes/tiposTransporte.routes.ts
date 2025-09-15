import { Router } from "express";
import { ListarTiposTransporteService } from "../../application/tiposTransporte/ListarTiposTransporteService";
import { ActualizarTipoTransporteService } from "../../application/tiposTransporte/ActualizarTipoTransporteService";
import { TipoTransporteRepository } from "../adapter/TipoTransporteRepository";
import { listarTiposTransporteController } from "../controller/TiposTransporteController";


const router = Router();
const repo = new TipoTransporteRepository();


router.get("/", async (_, res, next) => {
try {
const service = new ListarTiposTransporteService(repo);
const result = await service.execute();
res.json(result);
} catch (e) {
next(e);
}
});


router.put("/:id", async (req, res, next) => {
try {
const id = Number(req.params.id);
const { factor_emision_co2 } = req.body;
const service = new ActualizarTipoTransporteService(repo);
await service.execute({ id, factor_emision_co2 });
res.status(204).end();
} catch (e) {
next(e);
}
});

router.get("/", listarTiposTransporteController);

export default router;