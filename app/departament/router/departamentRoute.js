"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentController_1 = __importDefault(require("../controller/departamentController"));
class DepartamentRoute {
    constructor() {
        this.apiRouteDepartament = (0, express_1.Router)();
        this.chargeRoutes();
    }
    chargeRoutes() {
        this.apiRouteDepartament.post("/add", departamentController_1.default.createDepartament);
        this.apiRouteDepartament.get("/read", departamentController_1.default.readDepartament);
        this.apiRouteDepartament.put("/update", departamentController_1.default.updateDepartament);
        this.apiRouteDepartament.delete("/delete/:id", departamentController_1.default.deleteDepartament);
        this.apiRouteDepartament.get("/search/:id", departamentController_1.default.seacrhDepartamentById);
        this.apiRouteDepartament.get("/searchName/:nombre_departamento", departamentController_1.default.seacrhDepartamentByName);
        this.apiRouteDepartament.get("/searchNameOne/:letra_departamento", departamentController_1.default.seacrhDepartamentByNameOne);
        this.apiRouteDepartament.get("/readASC", departamentController_1.default.seacrhDepartamentByAsc);
        this.apiRouteDepartament.get("/readDSC", departamentController_1.default.seacrhDepartamentByDsc);
        this.apiRouteDepartament.get("/getC", departamentController_1.default.getCountD);
    }
}
const departamentRoute = new DepartamentRoute();
exports.default = departamentRoute.apiRouteDepartament;
