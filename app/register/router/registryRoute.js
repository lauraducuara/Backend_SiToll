"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registryController_1 = __importDefault(require("../controller/registryController"));
class RegistryRoute {
    constructor() {
        this.apiRouteRoutes = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteRoutes.post("/add", registryController_1.default.registryUser);
    }
}
const registryRoute = new RegistryRoute();
exports.default = registryRoute.apiRouteRoutes;
