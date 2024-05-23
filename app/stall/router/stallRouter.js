"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stallController_1 = __importDefault(require("../controller/stallController"));
class StallRouter {
    constructor() {
        this.apiRouteStall = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteStall.post("/add", stallController_1.default.createStall);
        this.apiRouteStall.get("/read", stallController_1.default.readStall);
        this.apiRouteStall.put("/update", stallController_1.default.updateStall);
        this.apiRouteStall.delete("/delete/:id", stallController_1.default.deleteStall);
    }
}
const stallRoute = new StallRouter();
exports.default = stallRoute.apiRouteStall;
