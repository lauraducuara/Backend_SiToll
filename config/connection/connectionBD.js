"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const dotenv_1 = __importDefault(require("dotenv"));
const departament_1 = __importDefault(require("../../models/departament"));
const routes_1 = __importDefault(require("../../models/routes"));
const turns_1 = __importDefault(require("../../models/turns"));
const users_1 = __importDefault(require("../../models/users"));
const access_1 = __importDefault(require("../../models/access"));
const routes_departaments_1 = __importDefault(require("../../models/routes_departaments"));
const tolls_1 = __importDefault(require("../../models/tolls"));
const stalls_1 = __importDefault(require("../../models/stalls"));
const users_turns_1 = __importDefault(require("../../models/users_turns"));
dotenv_1.default.config({ path: '.env' });
const port = Number(process.env.PORT);
const dataBase = String(process.env.DATABASE);
const host = String(process.env.HOST);
const user = String(process.env.USER_BD);
const password = String(process.env.PASSWORD_USER);
const poolConnection = new typeorm_1.DataSource({
    type: "postgres",
    host: host,
    port: port,
    username: user,
    password: password,
    database: dataBase,
    synchronize: true,
    logging: true,
    entities: [departament_1.default, routes_1.default, turns_1.default, users_1.default, access_1.default, routes_departaments_1.default, tolls_1.default, stalls_1.default, users_turns_1.default],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    //ssl: {rejectUnauthorized:false}
});
poolConnection.initialize()
    .then((conn) => {
    console.log("Conexion establecida con la BD", dataBase);
}).catch((miError) => {
    console.log(miError);
});
exports.default = poolConnection;
