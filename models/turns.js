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
const users_turns_1 = __importDefault(require("./users_turns"));
let Turns = class Turns {
    constructor(cod, dias_turno, hora_inicio_turno, hora_fin_turno, tipo_turno, estado_turno) {
        this.codTurno = cod;
        this.diasTurno = dias_turno;
        this.horaInicioTurno = hora_inicio_turno;
        this.horaFinTurno = hora_fin_turno;
        this.tipoTurno = tipo_turno;
        this.estadoTurno = estado_turno;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_turno" }),
    __metadata("design:type", Number)
], Turns.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dias_turno", length: 200 }),
    __metadata("design:type", String)
], Turns.prototype, "diasTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "hora_inicio_turno", type: "time" }),
    __metadata("design:type", String)
], Turns.prototype, "horaInicioTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "hora_fin_turno", type: "time" }),
    __metadata("design:type", String)
], Turns.prototype, "horaFinTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo_turno", type: "integer" }),
    __metadata("design:type", Number)
], Turns.prototype, "tipoTurno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "estado_turno", type: "integer" }),
    __metadata("design:type", Number)
], Turns.prototype, "estadoTurno", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_turns_1.default, (objUsersTurn) => objUsersTurn.userTurn),
    __metadata("design:type", Array)
], Turns.prototype, "referencedUsers", void 0);
Turns = __decorate([
    (0, typeorm_1.Entity)("turnos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String, String, Number, Number])
], Turns);
exports.default = Turns;
