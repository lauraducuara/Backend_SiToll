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
const stalls_1 = __importDefault(require("./stalls"));
const routes_1 = __importDefault(require("./routes"));
let Tolls = class Tolls {
    constructor(cod, cod_ruta, nombre_peaje, photoPub, photoPriv) {
        this.codPeaje = cod;
        this.codRuta = cod_ruta;
        this.nombrePeaje = nombre_peaje;
        this.public_toll_photo = photoPub;
        this.private_toll_photo = photoPriv;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cod_peaje" }),
    __metadata("design:type", Number)
], Tolls.prototype, "codPeaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cod_ruta", type: "integer" }),
    __metadata("design:type", Number)
], Tolls.prototype, "codRuta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_peaje", length: 200 }),
    __metadata("design:type", String)
], Tolls.prototype, "nombrePeaje", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "public_toll_photo", length: 500 }),
    __metadata("design:type", String)
], Tolls.prototype, "public_toll_photo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "private_toll_photo", length: 500 }),
    __metadata("design:type", String)
], Tolls.prototype, "private_toll_photo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => routes_1.default, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "cod_ruta", referencedColumnName: "codRuta" }),
    __metadata("design:type", routes_1.default)
], Tolls.prototype, "codRouteR", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => stalls_1.default, (objStalls) => objStalls.codTollR),
    __metadata("design:type", Array)
], Tolls.prototype, "stall", void 0);
Tolls = __decorate([
    (0, typeorm_1.Entity)("peajes", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, String, String, String])
], Tolls);
exports.default = Tolls;
