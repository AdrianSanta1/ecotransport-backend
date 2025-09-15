import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  save(usuario: Usuario): Promise<Usuario>;
  findAll(): Promise<Usuario[]>;
  findByEmail(email: string): Promise<Usuario | null>;
  findById(id: number): Promise<Usuario | null>;
  countViajes(usuarioId: number): Promise<number>;
}
