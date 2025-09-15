export interface ComentarioProps {
    usuarioId: number;
    comentario: string;
    id?: number;
    createdAt?: Date;
}
export declare class Comentario {
    usuarioId: number;
    comentario: string;
    id?: number;
    createdAt?: Date;
    constructor(props: ComentarioProps);
}
