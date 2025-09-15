import { comentarioRepository } from "../../infrastructure/dependencies";
import { Comentario } from "../../domain/entities/Comentario";


export const crearComentario = async (
usuarioId: number,
comentarioTexto: string
) => {
const comentario = new Comentario({ usuarioId, comentario: comentarioTexto });
return await comentarioRepository.save(comentario);
};