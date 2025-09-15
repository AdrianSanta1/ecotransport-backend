"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarUsuarios = void 0;
const dependencies_1 = require("../../infrastructure/dependencies");
const listarUsuarios = async () => {
    return await dependencies_1.usuarioRepository.findAll();
};
exports.listarUsuarios = listarUsuarios;
//# sourceMappingURL=listarUsuarios.js.map