
import { Request, Response } from "express";
import { crearUsuario } from "../../application/usecases/crearUsuario";
import { listarUsuarios } from "../../application/usecases/listarUsuarios";
import { AppDataSource } from "../typeorm/data-source";
import { UsuarioEntity } from "../entities/UsuarioEntity";

export class UsuarioController {
  static async crear(req: Request, res: Response) {
    try {
      const usuario = await crearUsuario(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  }

  static async listar(req: Request, res: Response) {
    try {
      const usuarios = await listarUsuarios();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  }

  static async desactivar(req: Request, res: Response) {
    try {
      const repo = AppDataSource.getRepository(UsuarioEntity);
      const id = Number(req.params.id);

      await repo.update(id, { activo: false });

      res.json({ message: "Usuario desactivado" });
    } catch (err) {
      res.status(400).json({ error: "No se pudo desactivar el usuario" });
    }
  }

    // 👉 NUEVO: GET /api/usuarios/:id
  static async obtenerPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const repo = AppDataSource.getRepository(UsuarioEntity);

      const u = await repo.findOne({ where: { id } });
      if (!u) return res.status(404).json({ error: "Usuario no encontrado" });

      // Respondemos exactamente lo que consume el frontend
      res.json({
        id: u.id,
        nombre: u.nombre,
        apellido: u.apellido,
        email: u.email,
        activo: (u as any).activo ?? true,
      });
    } catch {
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  }
}

