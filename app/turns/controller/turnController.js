"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnsDao_1 = __importDefault(require("../dao/turnsDao"));
class TurnController extends turnsDao_1.default {
    createTurn(req, res) {
        let objTurn;
        objTurn = req.body;
        TurnController.addTurn(res, objTurn);
    }
    readTurn(req, res) {
        TurnController.getTurn(res);
    }
    updateTurn(req, res) {
        let objTurn;
        objTurn = req.body;
        TurnController.updateTurn(res, objTurn);
    }
    seacrhTurnById(req, res) {
        const codTurn = Number(req.params.id);
        if (!isNaN(codTurn)) {
            TurnController.getOneTurnById(res, codTurn);
        }
        else {
            res.status(400).json({ mensaje: "Código del turno no valido" });
        }
    }
    deleteTurn(req, res) {
        const cod_turno = Number(req.params.id);
        if (!isNaN(cod_turno)) {
            TurnController.deleteTurn(res, cod_turno);
        }
        else {
            res.status(400).json({ mensaje: "Código del turno no valido" });
        }
    }
}
const turnController = new TurnController();
exports.default = turnController;
