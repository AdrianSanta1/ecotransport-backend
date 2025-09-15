import { Request, Response } from "express";
import { listarTiposTransporte } from "../../application/usecases/listarTiposTransporte";


export const listarTiposTransporteController = async (_req: Request, res: Response) => {
try {
const tipos = await listarTiposTransporte();
res.json(tipos);
} catch (error: any) {
res.status(400).json({ error: error.message });
}
};