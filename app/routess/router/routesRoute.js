"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routeController_1 = __importDefault(require("../controller/routeController"));
class RoutesRoute {
    constructor() {
        this.apiRouteRoutes = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteRoutes.post("/add", routeController_1.default.createRoute);
        this.apiRouteRoutes.get("/read", routeController_1.default.readRoute);
        this.apiRouteRoutes.put("/update", routeController_1.default.updateRoute);
        this.apiRouteRoutes.delete("/delete/:id", routeController_1.default.deleteRoute);
        this.apiRouteRoutes.get("/search/:id", routeController_1.default.seacrhRouteById);
    }
}
const routesRoute = new RoutesRoute();
exports.default = routesRoute.apiRouteRoutes;
