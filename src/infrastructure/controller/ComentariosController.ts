import { Request, Response } from "express";
import { AppDataSource } from "../typeorm/data-source";
import { ComentarioEntity } from "../entities/ComentarioEntity";

export class ComentarioController {
  static async crear(req: Request, res: Response) {
    try {
      const { usuarioId, comentario } = req.body;
      const repo = AppDataSource.getRepository(ComentarioEntity);

      const entity = repo.create({ usuarioId, comentario });
      const saved = await repo.save(entity);

      res.status(201).json(saved);
    } catch {
      res.status(400).json({ error: "No se pudo crear el comentario" });
    }
  }

  static async listarPorUsuario(req: Request, res: Response) {
    try {
      const usuarioId = Number(req.params.usuarioId);
      const repo = AppDataSource.getRepository(ComentarioEntity);

      const rows = await repo.find({
        where: { usuarioId },
        order: { createdAt: "ASC" },
      });

      res.json(rows);
    } catch {
      res.status(500).json({ error: "No se pudieron obtener los comentarios" });
    }
  }

  static async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { comentario } = req.body;
      const repo = AppDataSource.getRepository(ComentarioEntity);

      await repo.update(id, { comentario });
      const updated = await repo.findOne({ where: { id } });

      res.json(updated);
    } catch {
      res.status(400).json({ error: "No se pudo actualizar el comentario" });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const repo = AppDataSource.getRepository(ComentarioEntity);

      await repo.delete(id);
      res.status(204).end();
    } catch {
      res.status(400).json({ error: "No se pudo eliminar el comentario" });
    }
  }
}
