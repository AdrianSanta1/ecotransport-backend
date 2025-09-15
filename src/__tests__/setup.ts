// backend/src/__tests__/setup.ts
import 'reflect-metadata';

// Variables de entorno para testing
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_secret';

// Configuración global para todos los tests
beforeEach(() => {
  jest.clearAllMocks();
});

console.log('Test setup cargado correctamente');