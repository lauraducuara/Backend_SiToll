"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RouteDepartamentController_1 = __importDefault(require("../controller/RouteDepartamentController"));
class RouteDepartamentRoute {
    constructor() {
        this.apiDepartamentRoute = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiDepartamentRoute.post("/add", RouteDepartamentController_1.default.createDepartamentRoute);
        this.apiDepartamentRoute.get("/read", RouteDepartamentController_1.default.readDepartamentRoute);
        this.apiDepartamentRoute.delete("/delete/:id", RouteDepartamentController_1.default.deleteRouteDepartment);
    }
}
const routeDepartamentRoute = new RouteDepartamentRoute();
exports.default = routeDepartamentRoute.apiDepartamentRoute;
