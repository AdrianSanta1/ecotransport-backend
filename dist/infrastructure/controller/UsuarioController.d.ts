import { Request, Response } from "express";
export declare class UsuarioController {
    static crear(req: Request, res: Response): Promise<void>;
    static listar(req: Request, res: Response): Promise<void>;
    static desactivar(req: Request, res: Response): Promise<void>;
    static obtenerPorId(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
