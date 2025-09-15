"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearComentario = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const Comentario_1 = require("../../domain/entities/Comentario");
const crearComentario = async (usuarioId, comentarioTexto) => {
    const comentario = new Comentario_1.Comentario({ usuarioId, comentario: comentarioTexto });
    return await dependencies_1.comentarioRepository.save(comentario);
};
exports.crearComentario = crearComentario;
//# sourceMappingURL=crearComentario.js.map