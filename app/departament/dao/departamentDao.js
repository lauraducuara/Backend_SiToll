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
const departament_1 = __importDefault(require("../../../models/departament"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const Like_1 = require("typeorm/find-options/operator/Like");
class DepartamentDao {
    static addDepartaments(res, objDepartament) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.insert(objDepartament).then((response) => {
                res.status(200).json({ message: "Se ha creado el departamento correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el departamento" });
            });
        });
    }
    static getDepartaments(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.find().then((answer) => {
                const arrayDepartament = answer;
                res.status(200).json(arrayDepartament);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener los departamentos", error });
            });
        });
    }
    static updateDepartaments(res, objDepartament) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.update({ codDepartamento: objDepartament.codDepartamento }, objDepartament).then((answer) => {
                res.status(200).json({ message: "Departamento actualizado", objeto: objDepartament });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el departamento", error });
            });
        });
    }
    static deleteDepartament(res, codDepartamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const departamentoExistente = yield this.departamentRepository.findBy({ codDepartamento: codDepartamento });
            if (departamentoExistente.length == 0) {
                // El departamento no existe, enviar respuesta de error
                return res.status(404).json({ mensaje: "El departamento no se encontró" });
            }
            else {
                // El departamento existe, proceder con la eliminación
                this.departamentRepository.delete({ codDepartamento })
                    .then((answer) => {
                    res.status(200).json({ message: "Departamento eliminado", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el departamento", error });
                });
            }
        });
    }
    static getOneDepartamentsById(res, cod_departamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.findBy({ codDepartamento: cod_departamento }).then((answer) => {
                const arrayDepartament = answer;
                res.status(200).json(arrayDepartament);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el departamentos", error });
            });
        });
    }
    static getOneDepartamentsByName(res, nombre_departamento) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.findOne({ where: { nombreDepartamento: nombre_departamento } }).then((answer) => {
                if (answer) {
                    const arrayDepartament = answer;
                    res.status(200).json(arrayDepartament);
                }
                else {
                    res.status(404).json({ mensaje: "Departamento no encontrado" });
                }
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el departamentos", nombre_departamento });
            });
        });
    }
    static getOneDepartamentsByWord(res, first_letter) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.find({ where: { nombreDepartamento: (0, Like_1.Like)(first_letter + '%') } }).then((answer) => {
                if (answer.length > 0) {
                    res.status(200).json(answer);
                }
                else {
                    res.status(404).json({ mensaje: "No se encontraron con la letra", letra: first_letter });
                }
            }).catch((error) => {
                res.status(400).json({ mensaje: "Error al obtener los departamentos", error });
            });
        });
    }
    static getOneDepartamentsByASC(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.find({ order: { nombreDepartamento: "ASC" } }).then((answer) => {
                res.status(200).json(answer);
            }).catch((error) => {
                res.status(400).json({ mensaje: "No se encontraron departamentos", error });
            });
        });
    }
    static getOneDepartamentsByDSC(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.find({ order: { nombreDepartamento: "DESC" } }).then((answer) => {
                res.status(200).json(answer);
            }).catch((error) => {
                res.status(400).json({ mensaje: "No se encontraron departamentos", error });
            });
        });
    }
    static getCount(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRepository.count().then((answer) => {
                res.status(200).json("Número total de registros: " + answer);
            }).catch((error) => {
                res.status(400).json({ mensaje: "No se encontraron departamentos", error });
            });
        });
    }
}
DepartamentDao.departamentRepository = connectionBD_1.default.getRepository(departament_1.default);
exports.default = DepartamentDao;
