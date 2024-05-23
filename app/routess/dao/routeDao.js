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
const routes_1 = __importDefault(require("../../../models/routes"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
class RouteDao {
    static addRoute(res, objRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            this.routeRepository.insert(objRoute).then((response) => {
                res.status(200).json({ message: "Se ha creado la ruta correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar la ruta" });
            });
        });
    }
    static getRoute(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.routeRepository.find({ order: { nombreRuta: "ASC" } }).then((answer) => {
                const arrayRoute = answer;
                res.status(200).json(arrayRoute);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener la ruta", error });
            });
        });
    }
    static updateRoute(res, objRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            this.routeRepository.update({ codRuta: objRoute.codRuta }, objRoute).then((answer) => {
                res.status(200).json({ message: "Ruta actualizado", objeto: objRoute });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al actualizar la ruta", error });
            });
        });
    }
    static deleteRoute(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            const routeExistente = yield this.routeRepository.findBy({ codRuta: codRuta });
            if (routeExistente.length == 0) {
                return res.status(404).json({ mensaje: "La ruta no se encontró" });
            }
            else {
                this.routeRepository.delete({ codRuta })
                    .then((answer) => {
                    res.status(200).json({ message: "Ruta eliminada", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar la ruta", error });
                });
            }
        });
    }
    static getOneRoutesById(res, cod_ruta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.routeRepository.findBy({ codRuta: cod_ruta }).then((answer) => {
                const arrayRoutes = answer;
                res.status(200).json(arrayRoutes);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el departamentos", error });
            });
        });
    }
}
RouteDao.routeRepository = connectionBD_1.default.getRepository(routes_1.default);
exports.default = RouteDao;
