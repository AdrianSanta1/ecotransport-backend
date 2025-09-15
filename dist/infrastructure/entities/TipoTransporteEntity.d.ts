import { ViajeEntity } from "./ViajeEntity";
export declare class TipoTransporteEntity {
    id: number;
    nombre: string;
    factor_emision_co2: string | number;
    viajes: ViajeEntity[];
}
