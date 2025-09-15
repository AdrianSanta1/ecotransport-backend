import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";

interface Input {
  id: number;
  factor_emision_co2: number;
}

export class ActualizarTipoTransporteService {
  constructor(private tipoTransporteRepo: ITipoTransporteRepository) {}

  async execute(input: Input): Promise<void> {
    await this.tipoTransporteRepo.update(input.id, {
      factor_emision_co2: input.factor_emision_co2,
    });
  }
}