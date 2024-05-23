"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentDao_1 = __importDefault(require("../dao/departamentDao"));
class DepartamentController extends departamentDao_1.default {
    createDepartament(req, res) {
        let objDepartament;
        objDepartament = req.body;
        DepartamentController.addDepartaments(res, objDepartament);
    }
    readDepartament(req, res) {
        DepartamentController.getDepartaments(res);
    }
    updateDepartament(req, res) {
        console.log(req.body);
        let objDepartament;
        objDepartament = req.body;
        DepartamentController.updateDepartaments(res, objDepartament);
    }
    deleteDepartament(req, res) {
        const codDepartamento = Number(req.params.id);
        if (!isNaN(codDepartamento)) {
            DepartamentController.deleteDepartament(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Código de departamento no valido" });
        }
    }
    seacrhDepartamentById(req, res) {
        const codDepartamento = Number(req.params.id);
        let objDepartament;
        if (!isNaN(codDepartamento)) {
            DepartamentController.getOneDepartamentsById(res, codDepartamento);
        }
        else {
            res.status(400).json({ mensaje: "Código de departamento no valido" });
        }
    }
    seacrhDepartamentByName(req, res) {
        const nombre_departamento = String(req.params.nombre_departamento);
        if (nombre_departamento) {
            DepartamentController.getOneDepartamentsByName(res, nombre_departamento);
        }
        else {
            res.status(400).json({ mensaje: "Nombre de departamento no valido", nombre_departamento });
        }
    }
    seacrhDepartamentByNameOne(req, res) {
        const letra_departamento = String(req.params.letra_departamento.toLocaleUpperCase());
        if (letra_departamento) {
            DepartamentController.getOneDepartamentsByWord(res, letra_departamento);
        }
        else {
            res.status(400).json({ mensaje: "Nombre de departamento no valido" });
        }
    }
    seacrhDepartamentByAsc(req, res) {
        DepartamentController.getOneDepartamentsByASC(res);
    }
    seacrhDepartamentByDsc(req, res) {
        DepartamentController.getOneDepartamentsByDSC(res);
    }
    getCountD(req, res) {
        DepartamentController.getCount(res);
    }
}
const departamentController = new DepartamentController();
exports.default = departamentController;
