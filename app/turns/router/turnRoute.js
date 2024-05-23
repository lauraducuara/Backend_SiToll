"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnController_1 = __importDefault(require("../../turns/controller/turnController"));
class TurnRoute {
    constructor() {
        this.apiTurnRoutes = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiTurnRoutes.post("/add", turnController_1.default.createTurn);
        this.apiTurnRoutes.get("/read", turnController_1.default.readTurn);
        this.apiTurnRoutes.put("/update", turnController_1.default.updateTurn);
        this.apiTurnRoutes.delete("/delete/:id", turnController_1.default.deleteTurn);
        this.apiTurnRoutes.get("/search/:id", turnController_1.default.seacrhTurnById);
    }
}
const turnRoute = new TurnRoute();
exports.default = turnRoute.apiTurnRoutes;
