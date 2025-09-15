"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const data_source_1 = require("../../infrastructure/typeorm/data-source");
const UsuarioEntity_1 = require("../entities/UsuarioEntity");
const ViajeEntity_1 = require("../entities/ViajeEntity");
const Usuario_1 = require("../../domain/entities/Usuario");
class UsuarioRepository {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(UsuarioEntity_1.UsuarioEntity);
        this.repo = data_source_1.AppDataSource.getRepository(UsuarioEntity_1.UsuarioEntity);
        this.viajeRepo = data_source_1.AppDataSource.getRepository(ViajeEntity_1.ViajeEntity);
    }
    // ============== Mapeos Persistencia ⇄ Dominio ==============
    toDomain(u) {
        return new Usuario_1.Usuario({
            id: u.id,
            nombre: u.nombre,
            apellido: u.apellido ?? "", // si no existe, devuelve string vacío
            email: u.email,
            password_hash: u.password_hash, // 👈 usamos el campo correcto
            created_at: u.createdAt,
        });
    }
    toEntityProps(usuario) {
        return {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido ?? "",
            email: usuario.email,
            password_hash: usuario.password_hash,
            rol: usuario.rol ?? "USER",
        };
    }
    // ===================== Métodos exigidos por la interfaz =====================
    async save(usuario) {
        const entityLike = this.toEntityProps(usuario);
        const entity = this.repo.create(entityLike);
        const saved = await this.repo.save(entity);
        return this.toDomain(saved);
    }
    async findAll() {
        const rows = await this.repo.find({ order: { createdAt: "DESC" } });
        return rows.map((u) => this.toDomain(u));
    }
    async findByEmail(email) {
        const u = await this.repo
            .createQueryBuilder("u")
            .addSelect("u.password_hash") // 👈 seleccionamos el campo correcto
            .where("u.email = :email", { email })
            .getOne();
        return u ? this.toDomain(u) : null;
    }
    async findById(id) {
        const u = await this.repo.findOne({ where: { id } });
        return u ? this.toDomain(u) : null;
    }
    async countViajes(usuarioId) {
        return await this.viajeRepo.count({ where: { usuario: { id: usuarioId } } });
    }
    async update(id, patch) {
        const data = {};
        if (patch.nombre !== undefined)
            data.nombre = patch.nombre;
        if (patch.apellido !== undefined)
            data.apellido = patch.apellido;
        if (patch.email !== undefined)
            data.email = patch.email;
        if (patch.password_hash !== undefined)
            data.password_hash = patch.password_hash;
        if (patch.rol !== undefined)
            data.rol = patch.rol;
        await this.repo.update(id, data);
    }
    async delete(id) {
        await this.repo.delete(id);
    }
}
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=UsuarioRepository.js.map