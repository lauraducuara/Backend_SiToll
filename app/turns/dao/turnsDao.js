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
const turns_1 = __importDefault(require("../../../models/turns"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
class TurnsDao {
    static addTurn(res, objTurns) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnsRepository.insert(objTurns).then((response) => {
                res.status(200).json({ message: "Se ha creado el turno correctamente", objeto: response.raw });
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al insertar el turno" });
            });
        });
    }
    static getTurn(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnsRepository.find().then((answer) => {
                const arrayTurn = answer;
                res.status(200).json(arrayTurn);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el turno", error });
            });
        });
    }
    static updateTurn(res, objTurn) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnsRepository.update({ codTurno: objTurn.codTurno }, objTurn).then((answer) => {
                res.status(200).json({ message: "Turno actualizado", objeto: objTurn });
            }).catch((error) => {
                console.log(objTurn);
                res.status(400).json({ mensaje: "Fallo al actualizar el turno", error });
            });
        });
    }
    static getOneTurnById(res, cod_turno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.turnsRepository.findBy({ codTurno: cod_turno }).then((answer) => {
                const arrayTurn = answer;
                res.status(200).json(arrayTurn);
            }).catch((error) => {
                res.status(400).json({ mensaje: "Fallo al obtener el departamentos", error });
            });
        });
    }
    static deleteTurn(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            const routeExistente = yield this.turnsRepository.findBy({ codTurno: codTurno });
            if (routeExistente.length == 0) {
                return res.status(404).json({ mensaje: "El codigo del turno no se encontró" });
            }
            else {
                this.turnsRepository.delete({ codTurno })
                    .then((answer) => {
                    res.status(200).json({ message: "Turno eliminado", respuesta: answer.raw });
                })
                    .catch((error) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el turno", error });
                });
            }
        });
    }
}
TurnsDao.turnsRepository = connectionBD_1.default.getRepository(turns_1.default);
exports.default = TurnsDao;
