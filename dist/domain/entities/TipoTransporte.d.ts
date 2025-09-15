export type TransportName = 'car' | 'bus' | 'bicycle' | 'walk';
export interface TipoTransporteProps {
    id?: number;
    nombre: TransportName;
    factor_emision_co2: number;
}
export declare class TipoTransporte {
    id?: number;
    nombre: TransportName;
    factor_emision_co2: number;
    constructor(props: TipoTransporteProps);
    static normalizeNombre(n: string): TransportName;
}
