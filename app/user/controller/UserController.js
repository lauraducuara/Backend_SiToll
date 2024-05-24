"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../dao/UserDao"));
class UserController extends UserDao_1.default {
    createUser(req, res) {
        let objUser;
        objUser = req.body;
        UserController.addUser(res, objUser);
    }
    readUser(req, res) {
        UserController.getUser(res);
    }
    updateUser(req, res) {
        let objUsers;
        objUsers = req.body;
        UserController.updateUser(res, objUsers);
    }
    deleteUser(req, res) {
        const cod_ruta = Number(req.params.id);
        if (!isNaN(cod_ruta)) {
            UserController.deleteUser(res, cod_ruta);
        }
        else {
            res.status(400).json({ mensaje: "Código del usuario no valida" });
        }
    }
    seacrhUserById(req, res) {
        const codUser = Number(req.params.id);
        if (!isNaN(codUser)) {
            UserController.getOneUserById(res, codUser);
        }
        else {
            res.status(400).json({ mensaje: "Código del usuario no valido" });
        }
    }
}
const userController = new UserController();
exports.default = userController;
