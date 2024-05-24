"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userTurnDao_1 = __importDefault(require("../dao/userTurnDao"));
class UserTurnController extends userTurnDao_1.default {
    createUserTurn(req, res) {
        let objUserTurn;
        objUserTurn = req.body;
        UserTurnController.addUserTurn(res, objUserTurn);
    }
    readUserTurn(req, res) {
        UserTurnController.getUserTurn(res);
    }
    updateUserTurn(req, res) {
        let objUserTurn;
        objUserTurn = req.body;
        UserTurnController.updateUserTurns(res, objUserTurn);
    }
    deleteUserTurn(req, res) {
        const cod_puesto = Number(req.params.id);
        const cod_user_turn = Number(req.params.idU);
        const cod_turn = Number(req.params.idT);
        UserTurnController.deleteUserTurn(res, cod_user_turn, cod_puesto, cod_turn);
    }
    seacrhUsTById(req, res) {
        const cod_puesto = Number(req.params.id);
        const cod_user_turn = Number(req.params.idU);
        const cod_turn = Number(req.params.idT);
        if (!isNaN(cod_puesto) && !isNaN(cod_user_turn) && !isNaN(cod_turn)) {
            UserTurnController.getOneUserById(res, cod_puesto, cod_user_turn, cod_turn);
        }
        else {
            res.status(400).json({ mensaje: "Código del usuario turno no valido" });
        }
    }
}
const userTurnController = new UserTurnController();
exports.default = userTurnController;
