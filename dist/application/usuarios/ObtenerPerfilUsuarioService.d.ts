import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
export declare class ObtenerPerfilUsuarioService {
    private usuarioRepo;
    constructor(usuarioRepo: IUsuarioRepository);
    execute(usuarioId: number): Promise<{
        id: number | undefined;
        nombre: string;
        apellido: string;
        email: string;
        totalViajes: number;
    }>;
}
