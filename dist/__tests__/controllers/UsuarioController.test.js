"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioController_1 = require("../../infrastructure/controller/UsuarioController");
// Mocks simples
jest.mock('../../application/usecases/crearUsuario', () => ({
    crearUsuario: jest.fn()
}));
jest.mock('../../application/usecases/listarUsuarios', () => ({
    listarUsuarios: jest.fn()
}));
jest.mock('../../infrastructure/typeorm/data-source', () => ({
    AppDataSource: {
        getRepository: jest.fn()
    }
}));
const { crearUsuario } = require('../../application/usecases/crearUsuario');
const { listarUsuarios } = require('../../application/usecases/listarUsuarios');
const { AppDataSource } = require('../../infrastructure/typeorm/data-source');
describe('UsuarioController', () => {
    let mockReq;
    let mockRes;
    let mockRepository;
    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockRepository = {
            update: jest.fn()
        };
        AppDataSource.getRepository.mockReturnValue(mockRepository);
        jest.clearAllMocks();
    });
    describe('crear usuario', () => {
        test('should create user successfully', async () => {
            const userData = {
                nombre: 'Camila Ariza',
                email: 'juanacamila@gmail.com'
            };
            mockReq.body = userData;
            crearUsuario.mockResolvedValue({ id: 1, ...userData });
            await UsuarioController_1.UsuarioController.crear(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(crearUsuario).toHaveBeenCalledWith(userData);
        });
        test('should handle creation errors', async () => {
            mockReq.body = { email: 'bad-email' };
            crearUsuario.mockRejectedValue(new Error('Error'));
            await UsuarioController_1.UsuarioController.crear(mockReq, mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(500);
        });
    });
    describe('listar usuarios', () => {
        test('should list all users', async () => {
            const usuarios = [
                { id: 1, nombre: 'Juan', email: 'juan@test.com' },
                { id: 2, nombre: 'Maria', email: 'maria@test.com' }
            ];
            listarUsuarios.mockResolvedValue(usuarios);
            await UsuarioController_1.UsuarioController.listar(mockReq, mockRes);
            expect(listarUsuarios).toHaveBeenCalled();
            expect(mockRes.json).toHaveBeenCalledWith(usuarios);
        });
    });
    describe('desactivar usuario', () => {
        test('should deactivate user successfully', async () => {
            mockReq.params = { id: '1' };
            mockRepository.update.mockResolvedValue({ affected: 1 });
            await UsuarioController_1.UsuarioController.desactivar(mockReq, mockRes);
            expect(mockRepository.update).toHaveBeenCalledWith(1, { activo: false });
            expect(mockRes.json).toHaveBeenCalledWith({ message: 'Usuario desactivado' });
        });
    });
});
//# sourceMappingURL=UsuarioController.test.js.map