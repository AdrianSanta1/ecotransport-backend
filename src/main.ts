import "reflect-metadata";
import { AppDataSource } from "./infrastructure/typeorm/data-source";
import app from "./app";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar la base de datos", err);
  });
