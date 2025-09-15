import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";

export class ListarComentariosService {
  async execute(usuarioId: number): Promise<ComentarioEntity[]> {
    const repo = AppDataSource.getRepository(ComentarioEntity);
    return await repo.find({ where: { usuarioId } });
  }
}
