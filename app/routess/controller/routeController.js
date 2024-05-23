"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routeDao_1 = __importDefault(require("../dao/routeDao"));
class RouteController extends routeDao_1.default {
    createRoute(req, res) {
        let objRoute;
        objRoute = req.body;
        RouteController.addRoute(res, objRoute);
    }
    readRoute(req, res) {
        RouteController.getRoute(res);
    }
    updateRoute(req, res) {
        let objRoutes;
        objRoutes = req.body;
        RouteController.updateRoute(res, objRoutes);
    }
    deleteRoute(req, res) {
        const cod_ruta = Number(req.params.id);
        if (!isNaN(cod_ruta)) {
            RouteController.deleteRoute(res, cod_ruta);
        }
        else {
            res.status(400).json({ mensaje: "Código de la ruta no valida" });
        }
    }
    seacrhRouteById(req, res) {
        const codRoute = Number(req.params.id);
        let objRoute;
        if (!isNaN(codRoute)) {
            RouteController.getOneRoutesById(res, codRoute);
        }
        else {
            res.status(400).json({ mensaje: "Código de Routeo no valido" });
        }
    }
}
const routeController = new RouteController();
exports.default = routeController;
