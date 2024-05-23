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
const routes_departaments_1 = __importDefault(require("./routes_departaments"));
const tolls_1 = __importDefault(require("./tolls"));
let Routes = class Routes {
    constructor(cod, nombre_ruta, concesion_ruta) {
        this.codRuta = cod;
        this.nombreRuta = nombre_ruta;
        this.concesionRuta = concesion_ruta;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_ruta" }),
    __metadata("design:type", Number)
], Routes.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_ruta", length: 200 }),
    __metadata("design:type", String)
], Routes.prototype, "nombreRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "concesion_ruta", length: 200 }),
    __metadata("design:type", String)
], Routes.prototype, "concesionRuta", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tolls_1.default, (objTolls) => objTolls.codPeaje),
    __metadata("design:type", Array)
], Routes.prototype, "toll", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => routes_departaments_1.default, (objDepartamentRoute) => objDepartamentRoute.codRuta),
    __metadata("design:type", Array)
], Routes.prototype, "route_Dep", void 0);
Routes = __decorate([
    (0, typeorm_1.Entity)("rutas", { schema: "public" }),
    __metadata("design:paramtypes", [Number, String, String])
], Routes);
exports.default = Routes;
