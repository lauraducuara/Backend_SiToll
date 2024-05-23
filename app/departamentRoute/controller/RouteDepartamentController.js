"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routeDepartamentDao_1 = __importDefault(require("../dao/routeDepartamentDao"));
class RouteDepartamentController extends routeDepartamentDao_1.default {
    createDepartamentRoute(req, res) {
        const objRoutesDepartament = req.body;
        RouteDepartamentController.addDepaRoutes(res, objRoutesDepartament);
    }
    readDepartamentRoute(req, res) {
        RouteDepartamentController.getDepaRoutes(res);
    }
    deleteRouteDepartment(req, res) {
        const cod_departamento_ruta = Number(req.params.id);
        if (!isNaN(cod_departamento_ruta)) {
            RouteDepartamentController.deleteRouteDepartment(res, cod_departamento_ruta);
        }
        else {
            res.status(400).json({ mensaje: "Código de la ruta no valida" });
        }
    }
}
const departamentRouteController = new RouteDepartamentController();
exports.default = departamentRouteController;
