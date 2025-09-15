import { Request, Response } from "express";
import { registrarViaje } from "../../application/usecases/registrarViaje";
import { obtenerViajesPorMes } from "../../application/usecases/obtenerViajesPorMes";
import { contarViajesPorUsuario } from "../../application/usecases/contarViajesPorUsuario";


export const registrarViajeController = async (req: Request, res: Response) => {
try {
const viajeData = req.body;
const viaje = await registrarViaje(viajeData);
res.status(201).json(viaje);
} catch (error: any) {
res.status(400).json({ error: error.message });
}
};


export const obtenerViajesPorMesController = async (req: Request, res: Response) => {
try {
const { usuarioId, mes, anio } = req.query;
const viajes = await obtenerViajesPorMes(Number(usuarioId), Number(mes), Number(anio));
res.json(viajes);
} catch (error: any) {
res.status(400).json({ error: error.message });
}
};


export const contarViajesPorUsuarioController = async (req: Request, res: Response) => {
try {
const { usuarioId } = req.params;
const total = await contarViajesPorUsuario(Number(usuarioId));
res.json({ total });
} catch (error: any) {
res.status(400).json({ error: error.message });
}
};