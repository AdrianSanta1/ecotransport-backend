import { UsuarioEntity } from "./UsuarioEntity";
export declare class ReporteEntity {
    id: number;
    usuarioId: number;
    usuario: UsuarioEntity;
    fechaInicio: Date;
    fechaFin: Date;
    totalViajes: number;
    totalDistancia: number;
    totalCO2: number;
    transporteMasUsado: string;
    transporteMasContaminante: string;
    createdAt: Date;
}
