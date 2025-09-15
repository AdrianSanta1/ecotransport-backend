import { ViajeEntity } from "./ViajeEntity";
import { ReporteEntity } from "./ReporteEntity";
import { ComentarioEntity } from "./ComentarioEntity";
export declare class UsuarioEntity {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password_hash: string;
    rol: "admin" | "user";
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    viajes: ViajeEntity[];
    reportes: ReporteEntity[];
    comentarios: ComentarioEntity[];
}
