import { Comentario } from "../../domain/entities/Comentario";
import { IComentarioRepository } from "../../domain/interfaces/IComentarioRepository";
export declare class ComentarioRepository implements IComentarioRepository {
    private repo;
    save(comentario: Comentario): Promise<Comentario>;
    findAll(): Promise<Comentario[]>;
    findByUsuario(usuarioId: number): Promise<Comentario[]>;
}
