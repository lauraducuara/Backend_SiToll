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
const access_1 = __importDefault(require("../../../models/access"));
const connectionBD_1 = __importDefault(require("../../../config/connection/connectionBD"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registry_sql_1 = require("../repository/registry_sql");
const generateTokenController_1 = __importDefault(require("../../shared/controller/generateTokenController"));
class RegistryDao {
    static newUser(res, objUser, objAccess) {
        return __awaiter(this, void 0, void 0, function* () {
            let accessRepository = connectionBD_1.default.getRepository(access_1.default);
            let userRepository = connectionBD_1.default.getRepository(users_1.default);
            let action = 1, codUsuario = 0;
            const userAccess = yield accessRepository.findBy({ nombreAcceso: objAccess.nombreAcceso });
            if (userAccess.length == 0) {
                action = 2;
                codUsuario = (yield userRepository.insert(objUser)).identifiers[0].cod_usuario;
                console.log(codUsuario + "codigo");
                let encryptedPassword = bcryptjs_1.default.hashSync(objAccess.claveAcceso);
                objAccess.codUsuario = objUser.codUsuario;
                objAccess.claveAcceso = encryptedPassword;
                yield accessRepository.insert(objAccess);
            }
            userRepository.query(registry_sql_1.SQL_REGISTRY.DATA_token, [objUser.codUsuario])
                .then((response) => {
                switch (action) {
                    case 1:
                        res.status(400).json({ message: "El usuario ya existe" });
                        break;
                    case 2:
                        const token = generateTokenController_1.default.processAnswer(response[0]);
                        res.status(200).json({ tokenApp: token });
                        break;
                }
            }).catch((error) => {
                res.status(400).json({ message: "Fallo al registrar el usuario", error });
            });
        });
    }
}
exports.default = RegistryDao;
