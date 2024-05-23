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
const tolls_1 = __importDefault(require("./tolls"));
const users_turns_1 = __importDefault(require("./users_turns"));
let Stalls = class Stalls {
    constructor(cod, cod_peaje, horario_puesto) {
        this.codPuesto = cod;
        this.codPeaje = cod_peaje;
        this.horarioPuesto = horario_puesto;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_puesto" }),
    __metadata("design:type", Number)
], Stalls.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_peaje", type: "integer" }),
    __metadata("design:type", Number)
], Stalls.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "horario_puesto", length: 200 }),
    __metadata("design:type", String)
], Stalls.prototype, "horarioPuesto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tolls_1.default, (objTolls) => objTolls.codPeaje, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_peaje", referencedColumnName: "codPeaje"
        }]),
    __metadata("design:type", tolls_1.default)
], Stalls.prototype, "codTollR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_turns_1.default, (objUsersTurn) => objUsersTurn.codUserStallR),
    __metadata("design:type", Array)
], Stalls.prototype, "referencedStall", void 0);
Stalls = __decorate([
    (0, typeorm_1.Entity)("puestos", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String])
], Stalls);
exports.default = Stalls;
