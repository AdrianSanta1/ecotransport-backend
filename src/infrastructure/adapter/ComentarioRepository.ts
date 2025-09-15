import { Comentario } from "../../domain/entities/Comentario";
import { IComentarioRepository } from "../../domain/interfaces/IComentarioRepository";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { ComentarioEntity } from "../entities/ComentarioEntity";

export class ComentarioRepository implements IComentarioRepository {
  private repo = AppDataSource.getRepository(ComentarioEntity);

  async save(comentario: Comentario): Promise<Comentario> {
    const entity = this.repo.create({
      id: comentario.id,
      usuarioId: comentario.usuarioId,
      comentario: comentario.comentario,
      createdAt: comentario.createdAt,
    });

    const saved = await this.repo.save(entity);
    return new Comentario(saved);
  }

  async findAll(): Promise<Comentario[]> {
    const results = await this.repo.find();
    return results.map((r) => new Comentario({
      id: r.id,
      usuarioId: r.usuarioId,
      comentario: r.comentario,
      createdAt: r.createdAt,
    }));
  }

  async findByUsuario(usuarioId: number): Promise<Comentario[]> {
    const results = await this.repo.find({ where: { usuarioId } });
    return results.map((r) => new Comentario({
      id: r.id,
      usuarioId: r.usuarioId,
      comentario: r.comentario,
      createdAt: r.createdAt,
    }));
  }
}
