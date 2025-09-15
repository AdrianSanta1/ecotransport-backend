"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioEntity = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntity_1 = require("./UsuarioEntity");
let ComentarioEntity = class ComentarioEntity {
};
exports.ComentarioEntity = ComentarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ComentarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "usuario_id" }),
    __metadata("design:type", Number)
], ComentarioEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntity_1.UsuarioEntity, (usuario) => usuario.comentarios, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", UsuarioEntity_1.UsuarioEntity)
], ComentarioEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], ComentarioEntity.prototype, "comentario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], ComentarioEntity.prototype, "createdAt", void 0);
exports.ComentarioEntity = ComentarioEntity = __decorate([
    (0, typeorm_1.Entity)("comentarios")
], ComentarioEntity);
//# sourceMappingURL=ComentarioEntity.js.map