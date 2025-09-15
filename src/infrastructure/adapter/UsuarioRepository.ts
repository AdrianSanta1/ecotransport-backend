
import { Repository } from "typeorm";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { UsuarioEntity } from "../entities/UsuarioEntity";
import { ViajeEntity } from "../entities/ViajeEntity";

import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";

export class UsuarioRepository implements IUsuarioRepository {
  private repo = AppDataSource.getRepository(UsuarioEntity);
  private viajeRepo: Repository<ViajeEntity>;

  constructor() {
    this.repo = AppDataSource.getRepository(UsuarioEntity);
    this.viajeRepo = AppDataSource.getRepository(ViajeEntity);
  }

  // ============== Mapeos Persistencia ⇄ Dominio ==============

  private toDomain(u: UsuarioEntity): Usuario {
    return new Usuario({
      id: u.id as any,
      nombre: u.nombre,
      apellido: u.apellido ?? "",       // si no existe, devuelve string vacío
      email: u.email,
      password_hash: u.password_hash,   // 👈 usamos el campo correcto
      created_at: u.createdAt,
    });
  }

  private toEntityProps(usuario: Usuario): Partial<UsuarioEntity> {
    return {
      id: (usuario as any).id,
      nombre: (usuario as any).nombre,
      apellido: (usuario as any).apellido ?? "",
      email: (usuario as any).email,
      password_hash: (usuario as any).password_hash,
      rol: (usuario as any).rol ?? "USER",
    };
  }

  // ===================== Métodos exigidos por la interfaz =====================

  async save(usuario: Usuario): Promise<Usuario> {
    const entityLike = this.toEntityProps(usuario);
    const entity = this.repo.create(entityLike);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Usuario[]> {
    const rows = await this.repo.find({ order: { createdAt: "DESC" } });
    return rows.map((u) => this.toDomain(u));
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    const u = await this.repo
      .createQueryBuilder("u")
      .addSelect("u.password_hash") // 👈 seleccionamos el campo correcto
      .where("u.email = :email", { email })
      .getOne();

    return u ? this.toDomain(u) : null;
  }

  async findById(id: number): Promise<Usuario | null> {
    const u = await this.repo.findOne({ where: { id } });
    return u ? this.toDomain(u) : null;
  }

  async countViajes(usuarioId: number): Promise<number> {
    return await this.viajeRepo.count({ where: { usuario: { id: usuarioId } } });
  }

  async update(id: string, patch: Partial<Usuario>): Promise<void> {
    const data: Partial<UsuarioEntity> = {};
    if ((patch as any).nombre !== undefined) data.nombre = (patch as any).nombre;
    if ((patch as any).apellido !== undefined) data.apellido = (patch as any).apellido;
    if ((patch as any).email !== undefined) data.email = (patch as any).email;
    if ((patch as any).password_hash !== undefined) data.password_hash = (patch as any).password_hash;
    if ((patch as any).rol !== undefined) data.rol = (patch as any).rol;

    await this.repo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
