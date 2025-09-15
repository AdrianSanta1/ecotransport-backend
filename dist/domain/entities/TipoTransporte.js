"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTransporte = void 0;
class TipoTransporte {
    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.factor_emision_co2 = props.factor_emision_co2;
    }
    // (opcional) normalizador por si recibes sinónimos desde algún lado antiguo
    static normalizeNombre(n) {
        const m = n.trim().toLowerCase();
        if (m === 'car' || m === 'bus' || m === 'bicycle' || m === 'walk')
            return m;
        if (m === 'carro')
            return 'car';
        if (m === 'bicicleta')
            return 'bicycle';
        if (m === 'a_pie' || m === 'apie' || m === 'a pie')
            return 'walk';
        // por defecto, fuerza a 'car' o lanza error si prefieres
        return 'car';
    }
}
exports.TipoTransporte = TipoTransporte;
//# sourceMappingURL=TipoTransporte.js.map