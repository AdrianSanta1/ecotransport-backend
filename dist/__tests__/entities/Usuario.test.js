"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/__tests__/entities/Usuario.test.ts
const Usuario_1 = require("../../domain/entities/Usuario");
describe('Usuario Entity', () => {
    describe('constructor', () => {
        test('should create usuario with all properties', () => {
            const props = {
                id: 1,
                nombre: 'Juan',
                apellido: 'Pérez',
                email: 'juan@test.com',
                password_hash: '$2b$10$hashedpassword',
                created_at: new Date('2025-09-15')
            };
            const usuario = new Usuario_1.Usuario(props);
            expect(usuario.id).toBe(1);
            expect(usuario.nombre).toBe('Juan');
            expect(usuario.apellido).toBe('Pérez');
            expect(usuario.email).toBe('juan@test.com');
        });
        test('should create usuario without optional properties', () => {
            const props = {
                nombre: 'María',
                apellido: 'González',
                email: 'maria@test.com',
                password_hash: '$2b$10$anotherhash'
            };
            const usuario = new Usuario_1.Usuario(props);
            expect(usuario.id).toBeUndefined();
            expect(usuario.created_at).toBeUndefined();
            expect(usuario.nombre).toBe('María');
            expect(usuario.email).toBe('maria@test.com');
        });
        test('should store email correctly', () => {
            const props = {
                nombre: 'Test',
                apellido: 'User',
                email: 'test@example.com',
                password_hash: 'hash'
            };
            const usuario = new Usuario_1.Usuario(props);
            expect(usuario.email).toBe('test@example.com');
            expect(usuario.nombre).toBe('Test');
        });
    });
});
//# sourceMappingURL=Usuario.test.js.map