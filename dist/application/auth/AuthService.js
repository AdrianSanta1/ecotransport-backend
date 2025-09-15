"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor(usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }
    async login(email, password) {
        // Buscar usuario por email
        const usuario = await this.usuarioRepo.findByEmail(email);
        if (!usuario) {
            // mismo mensaje para evitar revelar si el email existe
            throw new Error("Usuario o contraseña inválidos");
        }
        // Comparar password plano vs hash almacenado
        const valid = await bcrypt_1.default.compare(password, usuario.password_hash);
        if (!valid) {
            throw new Error("Usuario o contraseña inválidos");
        }
        // Generar JWT (sin 'rol', porque no existe en el dominio Usuario)
        const secret = process.env.JWT_SECRET || "dev_secret"; // usa variable de entorno en prod
        const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email }, secret, { expiresIn: "24h" });
        return token;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map