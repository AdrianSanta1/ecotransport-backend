import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
export declare class ListarComentariosService {
    execute(usuarioId: number): Promise<ComentarioEntity[]>;
}
