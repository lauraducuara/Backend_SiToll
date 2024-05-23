"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accessController_1 = __importDefault(require("../controller/accessController"));
class AccessRoute {
    constructor() {
        this.apiRouteAccess = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteAccess.post("/singin", accessController_1.default.login);
    }
}
const accessRoute = new AccessRoute();
exports.default = accessRoute.apiRouteAccess;
