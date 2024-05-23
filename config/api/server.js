"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//import de las rutas
const departamentRoute_1 = __importDefault(require("../../app/departament/router/departamentRoute"));
const routesRoute_1 = __importDefault(require("../../app/routess/router/routesRoute"));
const turnRoute_1 = __importDefault(require("../../app/turns/router/turnRoute"));
const registryRoute_1 = __importDefault(require("../../app/register/router/registryRoute"));
const accessRoute_1 = __importDefault(require("../../app/access/route/accessRoute"));
const routeDepartamentRoute_1 = __importDefault(require("../../app/departamentRoute/router/routeDepartamentRoute"));
const tollRouter_1 = __importDefault(require("../../app/toll/router/tollRouter"));
const stallRouter_1 = __importDefault(require("../../app/stall/router/stallRouter"));
const userTurnRoute_1 = __importDefault(require("../../app/userTurn/router/userTurnRoute"));
const UserRoute_1 = __importDefault(require("../../app/user/route/UserRoute"));
const security_1 = __importDefault(require("../../middleware/security"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.chargeConfig();
        this.chargeRouter();
    }
    chargeConfig() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    chargeRouter() {
        this.app.use("/api/public/access", accessRoute_1.default);
        this.app.use("/api/public/register", registryRoute_1.default);
        /*Rutas privadas*/
        this.app.use("/api/private/departament", security_1.default.verificateToken, departamentRoute_1.default);
        this.app.use("/api/private/routes", security_1.default.verificateToken, routesRoute_1.default);
        this.app.use("/api/private/turns", security_1.default.verificateToken, turnRoute_1.default);
        this.app.use("/api/private/routeDepartament", security_1.default.verificateToken, routeDepartamentRoute_1.default);
        this.app.use("/api/private/toll", security_1.default.verificateToken, tollRouter_1.default);
        this.app.use("/api/private/stall", security_1.default.verificateToken, stallRouter_1.default);
        this.app.use("/api/private/userTurn", security_1.default.verificateToken, userTurnRoute_1.default);
        this.app.use("/api/private/user", security_1.default.verificateToken, UserRoute_1.default);
    }
    initializedServer() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor funcionando en el puerto: ", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
