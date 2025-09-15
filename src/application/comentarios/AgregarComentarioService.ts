import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";

export class AgregarComentarioService {
  async execute(usuarioId: number, comentario: string): Promise<ComentarioEntity> {
    const repo = AppDataSource.getRepository(ComentarioEntity);

    const nuevo = repo.create({ usuarioId, comentario });
    return await repo.save(nuevo);
  }
}
