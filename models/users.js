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
const access_1 = __importDefault(require("./access"));
const users_turns_1 = __importDefault(require("./users_turns"));
let Users = class Users {
    constructor(cod, identificacion_usuario, nombres_usuario, apellidos_usuario, rol_usuario) {
        this.codUsuario = cod;
        this.identificacionUsuario = identificacion_usuario;
        this.nombresUsuario = nombres_usuario;
        this.apellidosUsuario = apellidos_usuario;
        this.rolUsuario = rol_usuario;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_usuario" }),
    __metadata("design:type", Number)
], Users.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "identificacion_usuario", length: 20 }),
    __metadata("design:type", String)
], Users.prototype, "identificacionUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "nombres_usuario", length: 250 }),
    __metadata("design:type", String)
], Users.prototype, "nombresUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "apellidos_usuario", length: 250 }),
    __metadata("design:type", String)
], Users.prototype, "apellidosUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rol_usuario", length: 200 }),
    __metadata("design:type", String)
], Users.prototype, "rolUsuario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => access_1.default, (objAccess) => objAccess.codUserA),
    __metadata("design:type", access_1.default)
], Users.prototype, "acces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_turns_1.default, (objUsersTurn) => objUsersTurn.codUserTurnR),
    __metadata("design:type", Array)
], Users.prototype, "referencedUsers", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)("usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String, String, String])
], Users);
exports.default = Users;
