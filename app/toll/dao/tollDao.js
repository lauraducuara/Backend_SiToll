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
const tolls_1 = __importDefault(require("../../../models/tolls"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const var_images_1 = __importDefault(require("../../../config/domain/var_images"));
const adminImage_1 = __importDefault(require("../../../config/utilities/adminImage"));
const tollRepository_1 = require("../repository/tollRepository");
class TollDao {
    static addToll(res, objTolls) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tollRepository.insert(objTolls).then((response) => {
                res.status(200).json({ message: "Se ha creado el peaje correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el peaje" });
            });
        });
    }
    static getToll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tollRepository.query(tollRepository_1.SQL_TOLL.TOLL_QUERY).then((answer) => {
                const arrayToll = answer.map((item) => ({
                    codRuta: item.cod_ruta,
                    codPeaje: item.cod_peaje,
                    nombrePeaje: item.nombre_peaje,
                    nombreRuta: item.nombre_ruta,
                    public_toll_photo: item.public_toll_photo,
                    private_toll_photo: item.private_toll_photo,
                }));
                arrayToll.map((objToll) => {
                    let privateName = objToll.private_toll_photo;
                    let base64 = adminImage_1.default.cargarImagenBase64(privateName, var_images_1.default.routePhotoSystem + privateName, 250);
                    objToll.base64Toll = base64;
                });
                res.status(200).json(arrayToll);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener los peajes", error });
            });
        });
    }
    static getOneTollById(res, cod_peaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tollRepository.query(tollRepository_1.SQL_TOLL.TOLL_ID, [cod_peaje])
                .then((answer) => {
                const arrayToll = answer.map((item) => ({
                    codPeaje: item.cod_peaje,
                    nombrePeaje: item.nombre_peaje,
                    codRuta: item.cod_ruta,
                    nombreRuta: item.nombre_ruta,
                    public_toll_photo: item.public_toll_photo,
                    private_toll_photo: item.private_toll_photo,
                    base64Toll: item.base64Toll,
                }));
                arrayToll.map((objToll) => {
                    let privateName = objToll.private_toll_photo;
                    let base64 = adminImage_1.default.cargarImagenBase64(privateName, var_images_1.default.routePhotoSystem + privateName, 250);
                    objToll.base64Toll = base64;
                });
                res.status(200).json(arrayToll);
            })
                .catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el peaje", error });
            });
        });
    }
    static updateTolls(res, objToll, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.tollRepository.findOne({ where: { codPeaje: codPeaje } });
            ;
            if (encontrado) {
                const routeImagePrivate = var_images_1.default.routePhotoSystem + encontrado.private_toll_photo;
                console.log(routeImagePrivate);
                adminImage_1.default.borrarImagen(routeImagePrivate);
                this.tollRepository.update({ codPeaje: codPeaje }, objToll).then(() => {
                    res.status(200).json({ message: "Peaje actualizado", objeto: objToll.private_toll_photo });
                }).catch((miErrosito) => {
                    console.log(miErrosito);
                    res.status(400).json({ message: "Peaje no" });
                });
            }
            else {
                res.status(400).json({ message: "Peaje no", objeto: objToll });
            }
        });
    }
    static getOneDepartamentsById(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tollRepository.findBy({ codPeaje: codPeaje }).then((answer) => {
                const arrayDepartament = answer;
                res.status(200).json(arrayDepartament);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el departamentos", error });
            });
        });
    }
    static deleteToll(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.tollRepository.findOne({ where: { codPeaje: codPeaje } });
            if (encontrado) {
                const routeImagePrivate = var_images_1.default.routePhotoSystem + encontrado.private_toll_photo;
                adminImage_1.default.borrarImagen(routeImagePrivate);
                this.tollRepository.delete({ codPeaje: codPeaje }).then((answer) => {
                    res.status(200).json({ mensaje: "Peaje eliminado", answer: answer.affected });
                }).catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el peaje" });
                });
            }
            else {
                res.status(400).json({ mensaje: "Fallo al consultar del peaje" });
            }
        });
    }
}
TollDao.tollRepository = connectionBD_1.default.getRepository(tolls_1.default);
exports.default = TollDao;
