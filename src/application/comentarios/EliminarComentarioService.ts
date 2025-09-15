import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";

export class EliminarComentarioService {
  async execute(id: number): Promise<void> {
    const repo = AppDataSource.getRepository(ComentarioEntity);

    const existente = await repo.findOne({ where: { id } });
    if (!existente) {
      throw new Error("Comentario no encontrado");
    }

    await repo.delete(id);
  }
}
