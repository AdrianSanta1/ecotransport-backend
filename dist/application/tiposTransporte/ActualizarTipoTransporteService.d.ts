import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";
interface Input {
    id: number;
    factor_emision_co2: number;
}
export declare class ActualizarTipoTransporteService {
    private tipoTransporteRepo;
    constructor(tipoTransporteRepo: ITipoTransporteRepository);
    execute(input: Input): Promise<void>;
}
export {};
