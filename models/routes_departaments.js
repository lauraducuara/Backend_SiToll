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
const departament_1 = __importDefault(require("./departament"));
const routes_1 = __importDefault(require("./routes"));
let Routes_Departaments = class Routes_Departaments {
    constructor(cod, cod_ruta, cod_departament, fecha_creacion_departamento_ruta) {
        this.codDepartamentoRuta = cod;
        this.codRuta = cod_ruta;
        this.codDepartamento = cod_departament;
        this.fechaCreacionDepartamentoRuta = fecha_creacion_departamento_ruta;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "cod_departamento_ruta" }),
    __metadata("design:type", Number)
], Routes_Departaments.prototype, "codDepartamentoRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_ruta", type: "integer" }),
    __metadata("design:type", Number)
], Routes_Departaments.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_departamento", type: "integer" }),
    __metadata("design:type", Number)
], Routes_Departaments.prototype, "codDepartamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_creacion_departamento_ruta", type: "date" }),
    __metadata("design:type", Date)
], Routes_Departaments.prototype, "fechaCreacionDepartamentoRuta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departament_1.default, (objDepartament) => objDepartament.departamentRoute, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_departamento", referencedColumnName: "codDepartamento"
        }]),
    __metadata("design:type", departament_1.default)
], Routes_Departaments.prototype, "codDepartamentR", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => routes_1.default, (objRoute) => objRoute.departamentRoute, {
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)([{
            name: "cod_ruta", referencedColumnName: "codRuta"
        }]),
    __metadata("design:type", routes_1.default)
], Routes_Departaments.prototype, "codRutaD", void 0);
Routes_Departaments = __decorate([
    (0, typeorm_1.Entity)("departamentos_rutas", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, Number, Date])
], Routes_Departaments);
exports.default = Routes_Departaments;
