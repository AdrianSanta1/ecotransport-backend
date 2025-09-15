
import { Request, Response } from "express";
import { crearRutaFavorita } from "../../application/usecases/crearRutaFavorita";
import { listarRutasFavoritas } from "../../application/usecases/listarRutasFavoritas";

export class RutaFavoritaController {
  static async crear(req: Request, res: Response) {
    try {
      const ruta = await crearRutaFavorita(req.body);
      res.status(201).json(ruta);
    } catch (err) {
      res.status(500).json({ error: "Error al crear la ruta favorita" });
    }
  }

  static async listar(req: Request, res: Response) {
    try {
      const rutas = await listarRutasFavoritas();
      res.json(rutas);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener las rutas favoritas" });
    }
  }
}
