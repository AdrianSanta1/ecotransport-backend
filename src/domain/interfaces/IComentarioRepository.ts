import { Comentario } from "../entities/Comentario";

export interface IComentarioRepository {
  save(comentario: Comentario): Promise<Comentario>;
  findAll(): Promise<Comentario[]>;
  findByUsuario(usuarioId: number): Promise<Comentario[]>;
}
