"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearUsuario = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const Usuario_1 = require("../../domain/entities/Usuario");
const crearUsuario = async (data) => {
    const usuario = new Usuario_1.Usuario(data);
    return await dependencies_1.usuarioRepository.save(usuario);
};
exports.crearUsuario = crearUsuario;
//# sourceMappingURL=crearUsuario.js.map