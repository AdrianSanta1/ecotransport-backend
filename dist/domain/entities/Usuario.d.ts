export interface UsuarioProps {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password_hash: string;
    created_at?: Date;
}
export declare class Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password_hash: string;
    created_at?: Date;
    constructor(props: UsuarioProps);
}
