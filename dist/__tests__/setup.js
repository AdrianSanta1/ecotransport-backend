"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/__tests__/setup.ts
require("reflect-metadata");
// Variables de entorno para testing
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test_secret';
// Configuración global para todos los tests
beforeEach(() => {
    jest.clearAllMocks();
});
console.log('Test setup cargado correctamente');
//# sourceMappingURL=setup.js.map