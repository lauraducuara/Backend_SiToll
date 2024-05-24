"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRoute {
    constructor() {
        this.apiRouteUser = (0, express_1.Router)();
        this.chargeUser();
    }
    chargeUser() {
        this.apiRouteUser.post("/add", UserController_1.default.createUser);
        this.apiRouteUser.get("/read", UserController_1.default.readUser);
        this.apiRouteUser.put("/update", UserController_1.default.updateUser);
        this.apiRouteUser.delete("/delete/:id", UserController_1.default.deleteUser);
        this.apiRouteUser.get("/search/:id", UserController_1.default.seacrhUserById);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.apiRouteUser;
