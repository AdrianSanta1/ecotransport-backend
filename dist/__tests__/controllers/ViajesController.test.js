"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViajesController_1 = require("../../infrastructure/controller/ViajesController");
// Mocks simples
jest.mock('../../application/usecases/registrarViaje', () => ({
    registrarViaje: jest.fn()
}));
jest.mock('../../application/usecases/obtenerViajesPorMes', () => ({
    obtenerViajesPorMes: jest.fn()
}));
jest.mock('../../application/usecases/contarViajesPorUsuario', () => ({
    contarViajesPorUsuario: jest.fn()
}));
const { registrarViaje } = require('../../application/usecases/registrarViaje');
const { obtenerViajesPorMes } = require('../../application/usecases/obtenerViajesPorMes');
const { contarViajesPorUsuario } = require('../../application/usecases/contarViajesPorUsuario');
describe('ViajesController', () => {
    let mockReq;
    let mockRes;
    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        jest.clearAllMocks();
    });
    describe('registrar viaje', () => {
        test('should register trip successfully', async () => {
            // Datos del viaje
            const viajeData = {
                usuarioId: 1,
                origen: 'Casa',
                destino: 'Trabajo',
                distanciaKm: 10
            };
            mockReq.body = viajeData;
            // Mock respuesta exitosa
            registrarViaje.mockResolvedValue({ id: 1, ...viajeData });
            await (0, ViajesController_1.registrarViajeController)(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(registrarViaje).toHaveBeenCalledWith(viajeData);
        });
        test('should handle registration errors', async () => {
            mockReq.body = { usuarioId: 999 };
            // Mock error
            registrarViaje.mockRejectedValue(new Error('Usuario no encontrado'));
            await (0, ViajesController_1.registrarViajeController)(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
        });
    });
    describe('obtener viajes por mes', () => {
        test('should get trips by month', async () => {
            mockReq.query = { usuarioId: '1', mes: '9', anio: '2025' };
            // Mock lista de viajes
            const viajes = [
                { id: 1, origen: 'Casa', destino: 'Trabajo' },
                { id: 2, origen: 'Trabajo', destino: 'Casa' }
            ];
            obtenerViajesPorMes.mockResolvedValue(viajes);
            await (0, ViajesController_1.obtenerViajesPorMesController)(mockReq, mockRes);
            expect(obtenerViajesPorMes).toHaveBeenCalledWith(1, 9, 2025);
            expect(mockRes.json).toHaveBeenCalledWith(viajes);
        });
    });
    describe('contar viajes', () => {
        test('should count user trips', async () => {
            mockReq.params = { usuarioId: '1' };
            // Mock contador
            contarViajesPorUsuario.mockResolvedValue(5);
            await (0, ViajesController_1.contarViajesPorUsuarioController)(mockReq, mockRes);
            expect(contarViajesPorUsuario).toHaveBeenCalledWith(1);
            expect(mockRes.json).toHaveBeenCalledWith({ total: 5 });
        });
    });
});
//# sourceMappingURL=ViajesController.test.js.map