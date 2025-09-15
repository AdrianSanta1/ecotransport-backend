import { AppDataSource } from "../infrastructure/typeorm/data-source";
import { UsuarioEntity } from "../infrastructure/entities/UsuarioEntity";
import bcrypt from "bcrypt";

async function crearUsuarioPrueba() {
  try {
    // Inicializar conexión a la DB
    await AppDataSource.initialize();

    const repo = AppDataSource.getRepository(UsuarioEntity);

    // Contraseña en texto plano
    const passwordPlano = "1234";

    // Hashear la contraseña
    const password_hash = await bcrypt.hash(passwordPlano, 10);

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

    await AppDataSource.destroy();
  } catch (error) {
    console.error("❌ Error creando usuario:", error);
  }
}

crearUsuarioPrueba();
