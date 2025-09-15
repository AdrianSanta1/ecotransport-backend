"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.apellido = props.apellido;
        this.email = props.email;
        this.password_hash = props.password_hash;
        this.created_at = props.created_at;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map