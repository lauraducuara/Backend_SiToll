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
const access_1 = __importDefault(require("../../../models/access"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const access_SQL_1 = require("../repository/access_SQL");
const generateTokenController_1 = __importDefault(require("../../shared/controller/generateTokenController"));
class AccessDao {
    static session(res, objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(objAccess.claveAcceso);
            let accessRepository = connectionBD_1.default.getRepository(access_1.default);
            let existAcces = yield accessRepository.findBy({ nombreAcceso: objAccess.nombreAcceso });
            if (existAcces.length !== 0) {
                let passwordAccess = existAcces[0].claveAcceso;
                if (bcryptjs_1.default.compareSync(objAccess.claveAcceso, String(passwordAccess))) {
                    accessRepository.query(access_SQL_1.SQL_ACCESO.DATOS_ACCESO, [existAcces[0].codUsuario]).then((answer) => {
                        let token = generateTokenController_1.default.processAnswer(answer[0]);
                        res.status(200).json({ tokenApp: token });
                    }).catch((myError) => {
                        res.status(400).json({ mensaje: "Fallo al iniciar sesión" });
                    });
                }
                else {
                    res.status(400).json({ mensaje: "Clave no valida" });
                }
            }
            else {
                res.status(400).json({ mensaje: "Nombre de acceso no valido" });
            }
        });
    }
}
exports.default = AccessDao;
