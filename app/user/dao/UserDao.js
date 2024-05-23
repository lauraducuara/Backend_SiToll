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
const users_1 = __importDefault(require("../../../models/users"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
class UserDao {
    static addUser(res, objUser) {
        return __awaiter(this, void 0, void 0, function* () {
            this.UserRepository.insert(objUser).then((response) => {
                res.status(200).json({ message: "Se ha creado el usuario correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar la ruta" });
            });
        });
    }
    static getUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.UserRepository.find().then((answer) => {
                const arrayUser = answer;
                res.status(200).json(arrayUser);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener la ruta", error });
            });
        });
    }
    static updateUser(res, objUser) {
        return __awaiter(this, void 0, void 0, function* () {
            this.UserRepository.update({ codUsuario: objUser.codUsuario }, objUser).then((answer) => {
                res.status(200).json({ message: "Ruta actualizado", objeto: objUser });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al actualizar la ruta", error });
            });
        });
    }
    static deleteUser(res, codUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserExistente = yield this.UserRepository.findBy({ codUsuario: codUsuario });
            if (UserExistente.length == 0) {
                return res.status(404).json({ mensaje: "La ruta no se encontró" });
            }
            else {
                this.UserRepository.delete({ codUsuario })
                    .then((answer) => {
                    res.status(200).json({ message: "Ruta eliminada", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar la ruta", error });
                });
            }
        });
    }
}
UserDao.UserRepository = connectionBD_1.default.getRepository(users_1.default);
exports.default = UserDao;
