"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/__tests__/entities/Viaje.test.ts
const Viaje_1 = require("../../domain/entities/Viaje");
describe('Viaje Entity', () => {
    describe('constructor', () => {
        test('should create viaje with all properties', () => {
            const props = {
                id: 1,
                usuarioId: 1,
                tipoTransporteId: 1,
                nombreRuta: 'Casa-Trabajo',
                origen: 'Casa',
                destino: 'Trabajo',
                distanciaKm: 10.5,
                fechaViaje: new Date('2025-09-15'),
                emisionCO2: 2.205,
                createdAt: new Date(),
                tipoTransporte: { nombre: 'Carro' }
            };
            const viaje = new Viaje_1.Viaje(props);
            expect(viaje.id).toBe(1);
            expect(viaje.usuarioId).toBe(1);
            expect(viaje.origen).toBe('Casa');
            expect(viaje.destino).toBe('Trabajo');
            expect(viaje.distanciaKm).toBe(10.5);
            expect(viaje.emisionCO2).toBe(2.205);
        });
        test('should create viaje without optional properties', () => {
            const props = {
                usuarioId: 1,
                tipoTransporteId: 2,
                origen: 'Origen',
                destino: 'Destino',
                distanciaKm: 5,
                fechaViaje: new Date('2025-09-15'),
                emisionCO2: 1.05
            };
            const viaje = new Viaje_1.Viaje(props);
            expect(viaje.id).toBeUndefined();
            expect(viaje.nombreRuta).toBeUndefined();
            expect(viaje.usuarioId).toBe(1);
            expect(viaje.origen).toBe('Origen');
            expect(viaje.destino).toBe('Destino');
        });
        test('should store CO2 emission correctly', () => {
            const props = {
                usuarioId: 1,
                tipoTransporteId: 1,
                origen: 'Bogotá',
                destino: 'Medellín',
                distanciaKm: 10,
                fechaViaje: new Date(),
                emisionCO2: 2.1
            };
            const viaje = new Viaje_1.Viaje(props);
            expect(viaje.emisionCO2).toBe(2.1);
            expect(viaje.distanciaKm).toBe(10);
        });
    });
});
//# sourceMappingURL=Viaje.test.js.map