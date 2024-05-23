"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registryDao_1 = __importDefault(require("../dao/registryDao"));
const nanoid_1 = require("nanoid");
class RegistryController extends registryDao_1.default {
    registryUser(req, res) {
        let objUser = req.body;
        let objAccess = req.body;
        console.log(objUser);
        objUser.identificacionUsuario = 'DOC_' + (0, nanoid_1.nanoid)(10);
        objUser.rolUsuario = 'Empleado';
        RegistryController.newUser(res, objUser, objAccess);
    }
}
const registryController = new RegistryController();
exports.default = registryController;
