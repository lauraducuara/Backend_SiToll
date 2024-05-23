"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tollController_1 = __importDefault(require("../controller/tollController"));
class TollRouter {
    constructor() {
        this.apiRouteToll = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteToll.post("/add", tollController_1.default.createToll);
        this.apiRouteToll.get("/read", tollController_1.default.readToll);
        this.apiRouteToll.put("/update/:idP", tollController_1.default.updateToll);
        this.apiRouteToll.delete("/delete/:id", tollController_1.default.deleteToll);
        this.apiRouteToll.get("/search/:id", tollController_1.default.seacrhTollById);
    }
}
const tollRoute = new TollRouter();
exports.default = tollRoute.apiRouteToll;
