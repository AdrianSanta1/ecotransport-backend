"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../infrastructure/typeorm/data-source");
const UsuarioEntity_1 = require("../infrastructure/entities/UsuarioEntity");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function crearUsuarioPrueba() {
    try {
        // Inicializar conexión a la DB
        await data_source_1.AppDataSource.initialize();
        const repo = data_source_1.AppDataSource.getRepository(UsuarioEntity_1.UsuarioEntity);
        // Contraseña en texto plano
        const passwordPlano = "1234";
        // Hashear la contraseña
        const password_hash = await bcrypt_1.default.hash(passwordPlano, 10);
        // Crear usuario
        const user = repo.create({
            nombre: "Juan",
            apellido: "Pérez",
            email: "juan@test.com",
            password_hash
        });
        await repo.save(user);
        console.log("✅ Usuario creado correctamente:");
        console.log("   Email:", user.email);
        console.log("   Contraseña (texto plano):", passwordPlano);
        await data_source_1.AppDataSource.destroy();
    }
    catch (error) {
        console.error("❌ Error creando usuario:", error);
    }
}
crearUsuarioPrueba();
//# sourceMappingURL=createUser.js.map