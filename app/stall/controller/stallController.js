"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stallDao_1 = __importDefault(require("../dao/stallDao"));
class StallController extends stallDao_1.default {
    createStall(req, res) {
        let objStall;
        objStall = req.body;
        StallController.addStall(res, objStall);
    }
    readStall(req, res) {
        StallController.getStall(res);
    }
    updateStall(req, res) {
        let objStall;
        objStall = req.body;
        StallController.updateStalls(res, objStall);
    }
    deleteStall(req, res) {
        const codStall = Number(req.params.id);
        if (!isNaN(codStall)) {
            StallController.deleteStall(res, codStall);
        }
        else {
            res.status(400).json({ mensaje: "Código del puesto no valido" });
        }
    }
}
const stallController = new StallController();
exports.default = stallController;
