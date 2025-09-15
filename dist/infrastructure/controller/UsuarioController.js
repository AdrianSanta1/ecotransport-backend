"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const crearUsuario_1 = require("../../application/usecases/crearUsuario");
const listarUsuarios_1 = require("../../application/usecases/listarUsuarios");
const data_source_1 = require("../typeorm/data-source");
const UsuarioEntity_1 = require("../entities/UsuarioEntity");
class UsuarioController {
    static async crear(req, res) {
        try {
            const usuario = await (0, crearUsuario_1.crearUsuario)(req.body);
            res.status(201).json(usuario);
        }
        catch (err) {
            res.status(500).json({ error: "Error al crear el usuario" });
        }
    }
    static async listar(req, res) {
        try {
            const usuarios = await (0, listarUsuarios_1.listarUsuarios)();
            res.json(usuarios);
        }
        catch (err) {
            res.status(500).json({ error: "Error al obtener los usuarios" });
        }
    }
    static async desactivar(req, res) {
        try {
            const repo = data_source_1.AppDataSource.getRepository(UsuarioEntity_1.UsuarioEntity);
            const id = Number(req.params.id);
            await repo.update(id, { activo: false });
            res.json({ message: "Usuario desactivado" });
        }
        catch (err) {
            res.status(400).json({ error: "No se pudo desactivar el usuario" });
        }
    }
    // 👉 NUEVO: GET /api/usuarios/:id
    static async obtenerPorId(req, res) {
        try {
            const id = Number(req.params.id);
            const repo = data_source_1.AppDataSource.getRepository(UsuarioEntity_1.UsuarioEntity);
            const u = await repo.findOne({ where: { id } });
            if (!u)
                return res.status(404).json({ error: "Usuario no encontrado" });
            // Respondemos exactamente lo que consume el frontend
            res.json({
                id: u.id,
                nombre: u.nombre,
                apellido: u.apellido,
                email: u.email,
                activo: u.activo ?? true,
            });
        }
        catch {
            res.status(500).json({ error: "Error al obtener el usuario" });
        }
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map