"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userTurnsController_1 = __importDefault(require("../controller/userTurnsController"));
class UserTurnRoute {
    constructor() {
        this.apiRouteUserTurn = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteUserTurn.post("/add", userTurnsController_1.default.createUserTurn);
        this.apiRouteUserTurn.get("/read", userTurnsController_1.default.readUserTurn);
        this.apiRouteUserTurn.put("/update", userTurnsController_1.default.updateUserTurn);
        this.apiRouteUserTurn.delete("/delete/:id/:idU/:idT/", userTurnsController_1.default.deleteUserTurn);
        this.apiRouteUserTurn.get("/search/:id/:idU/:idT/", userTurnsController_1.default.seacrhUsTById);
    }
}
const userTurnRoute = new UserTurnRoute();
exports.default = userTurnRoute.apiRouteUserTurn;
