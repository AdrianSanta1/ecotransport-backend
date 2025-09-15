import { tipoTransporteRepository } from "../../infrastructure/dependencies";


export const listarTiposTransporte = async () => {
return await tipoTransporteRepository.findAll();
};