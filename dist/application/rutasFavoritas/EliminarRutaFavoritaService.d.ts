import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
export declare class EliminarRutaFavoritaService {
    private readonly repo;
    constructor(repo: IRutaFavoritaRepository);
    execute(id: number): Promise<void>;
}
