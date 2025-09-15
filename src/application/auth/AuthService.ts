
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor(private usuarioRepo: IUsuarioRepository) {}

  async login(email: string, password: string): Promise<string> {
    // Buscar usuario por email
    const usuario = await this.usuarioRepo.findByEmail(email);
    if (!usuario) {
      // mismo mensaje para evitar revelar si el email existe
      throw new Error("Usuario o contraseña inválidos");
    }

    // Comparar password plano vs hash almacenado
    const valid = await bcrypt.compare(password, usuario.password_hash);
    if (!valid) {
      throw new Error("Usuario o contraseña inválidos");
    }

    // Generar JWT (sin 'rol', porque no existe en el dominio Usuario)
    const secret = process.env.JWT_SECRET || "dev_secret"; // usa variable de entorno en prod
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      secret,
      { expiresIn: "24h" }
    );

    return token;
  }
}
