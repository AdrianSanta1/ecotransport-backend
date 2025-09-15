import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
export declare class AgregarComentarioService {
    execute(usuarioId: number, comentario: string): Promise<ComentarioEntity>;
}
