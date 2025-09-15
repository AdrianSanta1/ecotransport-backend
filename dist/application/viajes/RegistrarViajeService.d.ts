import { ViajeRepository } from "../../infrastructure/adapter/ViajeRepository";
import { UsuarioRepository } from "../../infrastructure/adapter/UsuarioRepository";
import { TipoTransporteRepository } from "../../infrastructure/adapter/TipoTransporteRepository";
export declare class RegistrarViajeService {
    private viajeRepo;
    private usuarioRepo;
    private tipoRepo;
    constructor(viajeRepo: ViajeRepository, usuarioRepo: UsuarioRepository, tipoRepo: TipoTransporteRepository);
    execute(data: {
        usuarioId: number;
        tipoTransporteId: number;
        nombreRuta: string;
        origen: string;
        destino: string;
        distanciaKm: number;
        fechaViaje: string;
    }): Promise<import("../../domain/entities/Viaje").Viaje>;
}
