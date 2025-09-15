import { UsuarioEntity } from "./UsuarioEntity";
export declare class ComentarioEntity {
    id: number;
    usuarioId: number;
    usuario: UsuarioEntity;
    comentario: string;
    createdAt: Date;
}
