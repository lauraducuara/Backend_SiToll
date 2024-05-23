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
const routes_departaments_1 = __importDefault(require("../../../models/routes_departaments"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const routeDepartment_1 = require("../repository/routeDepartment");
class RouteDepartamentDao {
    static addDepaRoutes(res, objRouteDepartament) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentRouteRepository.insert(objRouteDepartament)
                .then((answer) => {
                res.status(200).json({ mensaje: "Departamento ruta fue registrado", respuesta: answer.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el departamento" });
            });
        });
    }
    static getDepaRoutes(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const answer = yield this.departamentRouteRepository.query(routeDepartment_1.SQL_ROUTE_DEPARTMENT.ROUTE_DEP);
                const transformedResult = answer.map((item) => ({
                    codRuta: item.codruta,
                    codDepartamento: item.coddepartamento,
                    codDepartamentoRuta: item.cod_departamento_ruta,
                    nombreRuta: item.nombre_ruta,
                    nombreDepartamento: item.nombre_departamento,
                    fechaCreacionDepartamentoRuta: new Date(item.fechacreaciondepartamentoruta),
                }));
                res.status(200).json(transformedResult);
            }
            catch (error) {
                res.status(400).json({ mensaje: "Fallo al obtener los datos", error });
            }
        });
    }
    static deleteRouteDepartment(res, codDepartamentoRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            const routeExistente = yield this.departamentRouteRepository.findBy({ codDepartamentoRuta: codDepartamentoRuta });
            if (routeExistente.length == 0) {
                return res.status(404).json({ mensaje: "La ruta del departamento no se encontró" });
            }
            else {
                this.departamentRouteRepository.delete({ codDepartamentoRuta })
                    .then((answer) => {
                    res.status(200).json({ message: "Ruta del departamento eliminada", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar la ruta del departamento", error });
                });
            }
        });
    }
}
RouteDepartamentDao.departamentRouteRepository = connectionBD_1.default.getRepository(routes_departaments_1.default);
exports.default = RouteDepartamentDao;
