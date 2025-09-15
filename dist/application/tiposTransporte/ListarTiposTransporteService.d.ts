import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";
import { TipoTransporte } from "../../domain/entities/TipoTransporte";
export declare class ListarTiposTransporteService {
    private tipoTransporteRepo;
    constructor(tipoTransporteRepo: ITipoTransporteRepository);
    execute(): Promise<TipoTransporte[]>;
}
