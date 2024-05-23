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
const turns_1 = __importDefault(require("./turns"));
const stalls_1 = __importDefault(require("./stalls"));
const users_1 = __importDefault(require("./users"));
let Users_Turns = class Users_Turns {
    constructor(cod, cod_puesto, cod_turno, estado_turno_usuario) {
        this.codUsuario = cod;
        this.codPuesto = cod_puesto;
        this.codTurno = cod_turno;
        this.estadoTurnoUsuario = estado_turno_usuario;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "integer", name: "cod_usuario" }),
    __metadata("design:type", Number)
], Users_Turns.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "integer", name: "cod_puesto" }),
    __metadata("design:type", Number)
], Users_Turns.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "integer", name: "cod_turno" }),
    __metadata("design:type", Number)
], Users_Turns.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estado_turno_usuario", type: "integer" }),
    __metadata("design:type", Number)
], Users_Turns.prototype, "estadoTurnoUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => turns_1.default, (objTurn) => objTurn, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)({ name: "cod_turno", referencedColumnName: "codTurno" }),
    __metadata("design:type", turns_1.default)
], Users_Turns.prototype, "userTurn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stalls_1.default, (objStalls) => objStalls, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_puesto", referencedColumnName: "codPuesto"
        }]),
    __metadata("design:type", stalls_1.default)
], Users_Turns.prototype, "codUserStallR", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.default, (objUsers) => objUsers, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_usuario", referencedColumnName: "codUsuario"
        }]),
    __metadata("design:type", users_1.default)
], Users_Turns.prototype, "codUserTurnR", void 0);
Users_Turns = __decorate([
    (0, typeorm_1.Entity)("turnos_usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, Number, Number])
], Users_Turns);
exports.default = Users_Turns;
