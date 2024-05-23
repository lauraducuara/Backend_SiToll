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
        console.log(cod_user_turn);
        console.log(cod_puesto);
        console.log(cod_turn);
        UserTurnController.deleteUserTurn(res, cod_user_turn, cod_puesto, cod_turn);
    }
}
const userTurnController = new UserTurnController();
exports.default = userTurnController;
