import { ViajeRepository } from "../../infrastructure/adapter/ViajeRepository";
import { UsuarioRepository } from "../../infrastructure/adapter/UsuarioRepository";
import { TipoTransporteRepository } from "../../infrastructure/adapter/TipoTransporteRepository";

export class RegistrarViajeService {
  constructor(
    private viajeRepo: ViajeRepository,
    private usuarioRepo: UsuarioRepository,
    private tipoRepo: TipoTransporteRepository
  ) {}

  async execute(data: {
  usuarioId: number;
  tipoTransporteId: number;
  nombreRuta: string;
  origen: string;
  destino: string;
  distanciaKm: number;
  fechaViaje: string;
}) {

  const usuario = await this.usuarioRepo.findById(data.usuarioId);

  if (!usuario) throw new Error("Usuario no encontrado");

  const tipo = await this.tipoRepo.findById(data.tipoTransporteId);

  if (!tipo) throw new Error("Tipo de transporte no encontrado");

  const factor = Number((tipo as any).factor_emision_co2);

  if (isNaN(factor)) throw new Error("Factor de emisión inválido");

  const emisionCO2 = data.distanciaKm * factor;

  const viaje = await this.viajeRepo.save({
    ...data,
    fechaViaje: new Date(data.fechaViaje),
    emisionCO2,
  });

  console.log("✅ Viaje guardado:", viaje);
  return viaje;
}
}