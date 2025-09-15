import { Request, Response } from "express";
export declare class RutaFavoritaController {
    static crear(req: Request, res: Response): Promise<void>;
    static listar(req: Request, res: Response): Promise<void>;
}
