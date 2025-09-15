import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";
export declare class UsuarioRepository implements IUsuarioRepository {
    private repo;
    private viajeRepo;
    constructor();
    private toDomain;
    private toEntityProps;
    save(usuario: Usuario): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findByEmail(email: string): Promise<Usuario | null>;
    findById(id: number): Promise<Usuario | null>;
    countViajes(usuarioId: number): Promise<number>;
    update(id: string, patch: Partial<Usuario>): Promise<void>;
    delete(id: string): Promise<void>;
}
