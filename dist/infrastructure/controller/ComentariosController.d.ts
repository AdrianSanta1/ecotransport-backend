import { Request, Response } from "express";
export declare class ComentarioController {
    static crear(req: Request, res: Response): Promise<void>;
    static listarPorUsuario(req: Request, res: Response): Promise<void>;
    static actualizar(req: Request, res: Response): Promise<void>;
    static eliminar(req: Request, res: Response): Promise<void>;
}
