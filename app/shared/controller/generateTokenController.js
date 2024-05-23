"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GeneratedTokenController {
    static processAnswer(registry) {
        const token = jsonwebtoken_1.default.sign({
            id: registry.cod_usuario,
            nameAccess: registry.nombre_acceso,
            nameUser: registry.nombres_usuario,
            lastNameUser: registry.apellidos_usuario,
            rol: registry.rol_usuario
        }, 'claveSecreta', { expiresIn: '10h' });
        return token;
    }
}
exports.default = GeneratedTokenController;
