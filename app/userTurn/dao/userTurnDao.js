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
const users_turns_1 = __importDefault(require("../../../models/users_turns"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
class UserTurnsDao {
    static addUserTurn(res, objUserTurn) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userTurnRepository.insert(objUserTurn).then((response) => {
                res.status(200).json({ message: "Se ha creado el turno del usuario correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el el turno del usuario" });
            });
        });
    }
    static getUserTurn(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userTurnRepository.find().then((answer) => {
                const arrayUserTurn = answer;
                res.status(200).json(arrayUserTurn);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el turno del usuario ", error });
            });
        });
    }
    static updateUserTurns(res, objUserTurn) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userTurnRepository.update({ codUsuario: objUserTurn.codUsuario }, objUserTurn).then((answer) => {
                res.status(200).json({ message: "Peaje actualizado", objeto: objUserTurn });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al actualizar el peaje", error: error });
            });
        });
    }
    static deleteUserTurn(res, codUsuario, codPuesto, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userTurnExistente = yield this.userTurnRepository.findBy({ codPuesto: codPuesto, codUsuario: codUsuario, codTurno: codTurno });
                if (userTurnExistente.length === 0) {
                    return res.status(404).json({ mensaje: "El usuario no se encontró" });
                }
                yield this.userTurnRepository.delete({ codUsuario, codPuesto, codTurno });
                return res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });
            }
            catch (error) {
                return res.status(400).json({ mensaje: "Fallo al eliminar el usuario", error });
            }
        });
    }
}
UserTurnsDao.userTurnRepository = connectionBD_1.default.getRepository(users_turns_1.default);
exports.default = UserTurnsDao;
