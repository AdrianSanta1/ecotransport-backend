import { Request, Response } from "express";
export declare class ReporteController {
    static crear(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static listarPorUsuario(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static eliminar(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static co2Semanal(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
