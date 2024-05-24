"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stalls_1 = __importDefault(require("../../../models/stalls"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const stallRepository_1 = require("../repository/stallRepository");
class StallDao {
    static addStall(res, objStall) {
        return __awaiter(this, void 0, void 0, function* () {
            this.stallRepository.insert(objStall).then((response) => {
                res.status(200).json({ message: "Se ha creado el puesto correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el puesto" });
            });
        });
    }
    static getStall(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.stallRepository.query(stallRepository_1.SQL_STALLS.STALL_SQL).then((answer) => {
                const arrayStall = answer.map((item) => ({
                    codPuesto: item.codpuesto,
                    codPeaje: item.codpeaje,
                    horarioPuesto: item.horario_puesto,
                    nombrePeaje: item.nombrepeaje,
                }));
                res.status(200).json(arrayStall);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener los puesto", error });
            });
        });
    }
    static getOneStallById(res, cod_puesto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(stallRepository_1.SQL_STALLS.STALL_SQL_ID[cod_puesto]);
            this.stallRepository.query(stallRepository_1.SQL_STALLS.STALL_SQL_ID, [cod_puesto])
                .then((answer) => {
                const arrayStall = answer.map((item) => ({
                    codPuesto: item.codpuesto,
                    codPeaje: item.codpeaje,
                    horarioPuesto: item.horario_puesto,
                    nombrePeaje: item.nombrepeaje,
                }));
                res.status(200).json(arrayStall);
            })
                .catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el puesto", error });
            });
        });
    }
    static updateRoute(res, objStall) {
        return __awaiter(this, void 0, void 0, function* () {
            this.stallRepository.update({ codPuesto: objStall.codPuesto }, objStall).then((answer) => {
                res.status(200).json({ message: "Puesto actualizado", objeto: objStall });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al actualizar la ruta", error });
            });
        });
    }
    static deleteStall(res, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            const StallExistente = yield this.stallRepository.findBy({ codPuesto: codPuesto });
            if (StallExistente.length == 0) {
                return res.status(404).json({ mensaje: "El peaje no se encontró" });
            }
            else {
                this.stallRepository.delete({ codPuesto })
                    .then((answer) => {
                    res.status(200).json({ message: "Peaje eliminado", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al peaje el departamento", error });
                });
            }
        });
    }
}
StallDao.stallRepository = connectionBD_1.default.getRepository(stalls_1.default);
exports.default = StallDao;
