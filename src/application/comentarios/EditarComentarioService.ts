import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";

export class EditarComentarioService {
  async execute(id: number, comentario: string): Promise<ComentarioEntity> {
    const repo = AppDataSource.getRepository(ComentarioEntity);

    const existente = await repo.findOne({ where: { id } });
    if (!existente) {
      throw new Error("Comentario no encontrado");
    }

    existente.comentario = comentario;
    return await repo.save(existente);
  }
}
