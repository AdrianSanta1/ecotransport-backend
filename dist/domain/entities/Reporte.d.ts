export interface ReporteProps {
    usuarioId: number;
    fechaInicio: Date;
    fechaFin: Date;
    totalViajes: number;
    totalDistancia: number;
    totalCO2: number;
    transporteMasUsado: string;
    transporteMasContaminante: string;
    id?: number;
    created_at?: Date;
}
export declare class Reporte {
    usuarioId: number;
    fechaInicio: Date;
    fechaFin: Date;
    totalViajes: number;
    totalDistancia: number;
    totalCO2: number;
    transporteMasUsado: string;
    transporteMasContaminante: string;
    id?: number;
    created_at?: Date;
    constructor(props: ReporteProps);
}
