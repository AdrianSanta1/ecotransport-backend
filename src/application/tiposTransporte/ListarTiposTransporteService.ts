
import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";
import { TipoTransporte } from "../../domain/entities/TipoTransporte";

export class ListarTiposTransporteService {
  constructor(private tipoTransporteRepo: ITipoTransporteRepository) {}

  async execute(): Promise<TipoTransporte[]> {
    return this.tipoTransporteRepo.findAll();
  }
}
