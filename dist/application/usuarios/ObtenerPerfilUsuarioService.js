"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerPerfilUsuarioService = void 0;
class ObtenerPerfilUsuarioService {
    constructor(usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }
    async execute(usuarioId) {
        const usuario = await this.usuarioRepo.findById(usuarioId);
        if (!usuario)
            throw new Error("Usuario no encontrado");
        const totalViajes = await this.usuarioRepo.countViajes(usuarioId);
        return {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            totalViajes,
        };
    }
}
exports.ObtenerPerfilUsuarioService = ObtenerPerfilUsuarioService;
//# sourceMappingURL=ObtenerPerfilUsuarioService.js.map