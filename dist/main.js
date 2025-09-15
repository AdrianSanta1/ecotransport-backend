"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./infrastructure/typeorm/data-source");
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Base de datos conectada");
    app_1.default.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("Error al conectar la base de datos", err);
});
//# sourceMappingURL=main.js.map