import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { RutaFavoritaEntity } from "../entities/RutaFavoritaEntity";

export class RutaFavoritaRepository implements IRutaFavoritaRepository {
  private repo = AppDataSource.getRepository(RutaFavoritaEntity);

  // 🔹 Listar todas (no se suele usar directamente)
  async findAll(): Promise<RutaFavorita[]> {
    const entities = await this.repo.find();
    return entities.map(this.toDomain);
  }

  // 🔹 Listar por usuario
  async findByUsuario(usuarioId: number): Promise<RutaFavorita[]> {
    const entities = await this.repo.find({ where: { usuarioId } });
    return entities.map(this.toDomain);
  }

  // 🔹 Guardar nueva ruta favorita
  async save(ruta: RutaFavorita): Promise<RutaFavorita> {
    const entity = this.repo.create({
      usuarioId: ruta.usuarioId,
      viajeId: ruta.viajeId,
      nombreRuta: ruta.nombreRuta,
      origen: ruta.origen,
      destino: ruta.destino,
    });

    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  // 🔹 Actualizar (si lo necesitas)
  async update(id: number, data: Partial<RutaFavorita>): Promise<void> {
    await this.repo.update(id, {
      nombreRuta: data.nombreRuta,
      origen: data.origen,
      destino: data.destino,
    });
  }

  // 🔹 Eliminar por id
  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }

  // 🔹 Helper: convertir de Entity a Domain
  private toDomain(entity: RutaFavoritaEntity): RutaFavorita {
    return new RutaFavorita({
      id: entity.id,
      usuarioId: entity.usuarioId,
      viajeId: entity.viajeId,
      nombreRuta: entity.nombreRuta,
      origen: entity.origen,
      destino: entity.destino,
      created_at: entity.created_at,
    });
  }
}
