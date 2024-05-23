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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_1 = __importDefault(require("./users"));
let Access = class Access {
    constructor(cod, nombre_acceso, clave_acceso) {
        this.codUsuario = cod;
        this.nombreAcceso = nombre_acceso;
        this.claveAcceso = clave_acceso;
    }
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_usuario" }),
    __metadata("design:type", Number)
], Access.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombre_acceso", length: 250 }),
    __metadata("design:type", String)
], Access.prototype, "nombreAcceso", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "clave_acceso", length: 500 }),
    __metadata("design:type", String)
], Access.prototype, "claveAcceso", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_1.default, (objUser) => objUser, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_usuario", referencedColumnName: "codUsuario" }]),
    __metadata("design:type", users_1.default)
], Access.prototype, "codUserA", void 0);
Access = __decorate([
    (0, typeorm_1.Entity)("accesos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String])
], Access);
exports.default = Access;
