// backend/src/__tests__/controllers/ComentarioController.test.ts
import { Request, Response } from 'express';
import { ComentarioController } from '../../infrastructure/controller/ComentariosController';

// Mock de TypeORM
jest.mock('../../infrastructure/typeorm/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn()
  }
}));

const { AppDataSource } = require('../../infrastructure/typeorm/data-source');

describe('ComentarioController', () => {
  let mockReq: any;
  let mockRes: any;
  let mockRepository: any;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      end: jest.fn()
    };
    mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    };
    
    AppDataSource.getRepository.mockReturnValue(mockRepository);
    jest.clearAllMocks();
  });

  describe('crear comentario', () => {
    test('should create comment successfully', async () => {
      const comentarioData = {
        usuarioId: 1,
        comentario: 'Excelente viaje en bicicleta'
      };
      mockReq.body = comentarioData;
      
      const comentarioCreado = { id: 1, ...comentarioData };
      mockRepository.create.mockReturnValue(comentarioCreado);
      mockRepository.save.mockResolvedValue(comentarioCreado);

      await ComentarioController.crear(mockReq, mockRes);

      expect(mockRepository.create).toHaveBeenCalledWith(comentarioData);
      expect(mockRepository.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(comentarioCreado);
    });

    test('should handle creation errors', async () => {
      mockReq.body = { usuarioId: 1 }; // falta comentario
      mockRepository.create.mockImplementation(() => {
        throw new Error('Error');
      });

      await ComentarioController.crear(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'No se pudo crear el comentario' });
    });
  });

  describe('listar comentarios', () => {
    test('should list comments by user', async () => {
      mockReq.params = { usuarioId: '1' };
      
      const comentarios = [
        { id: 1, usuarioId: 1, comentario: 'Comentario 1' },
        { id: 2, usuarioId: 1, comentario: 'Comentario 2' }
      ];
      mockRepository.find.mockResolvedValue(comentarios);

      await ComentarioController.listarPorUsuario(mockReq, mockRes);

      expect(mockRepository.find).toHaveBeenCalledWith({
        where: { usuarioId: 1 },
        order: { createdAt: 'ASC' }
      });
      expect(mockRes.json).toHaveBeenCalledWith(comentarios);
    });
  });

  describe('actualizar comentario', () => {
    test('should update comment successfully', async () => {
      mockReq.params = { id: '1' };
      mockReq.body = { comentario: 'Comentario actualizado' };
      
      const comentarioActualizado = { id: 1, comentario: 'Comentario actualizado' };
      mockRepository.findOne.mockResolvedValue(comentarioActualizado);

      await ComentarioController.actualizar(mockReq, mockRes);

      expect(mockRepository.update).toHaveBeenCalledWith(1, { comentario: 'Comentario actualizado' });
      expect(mockRes.json).toHaveBeenCalledWith(comentarioActualizado);
    });
  });

  describe('eliminar comentario', () => {
    test('should delete comment successfully', async () => {
      mockReq.params = { id: '1' };

      await ComentarioController.eliminar(mockReq, mockRes);

      expect(mockRepository.delete).toHaveBeenCalledWith(1);
      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.end).toHaveBeenCalled();
    });
  });
});