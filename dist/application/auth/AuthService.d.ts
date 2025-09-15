import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";
export declare class AuthService {
    private usuarioRepo;
    constructor(usuarioRepo: IUsuarioRepository);
    login(email: string, password: string): Promise<string>;
}
