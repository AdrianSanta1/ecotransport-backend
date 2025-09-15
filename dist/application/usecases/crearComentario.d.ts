import { Comentario } from "../../domain/entities/Comentario";
export declare const crearComentario: (usuarioId: number, comentarioTexto: string) => Promise<Comentario>;
