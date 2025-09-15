import { ComentarioEntity } from "../../infrastructure/entities/ComentarioEntity";
export declare class EditarComentarioService {
    execute(id: number, comentario: string): Promise<ComentarioEntity>;
}
