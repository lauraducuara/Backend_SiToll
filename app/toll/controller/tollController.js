"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tollDao_1 = __importDefault(require("../dao/tollDao"));
const var_images_1 = __importDefault(require("../../../config/domain/var_images"));
const nanoid_1 = require("nanoid");
const adminImage_1 = __importDefault(require("../../../config/utilities/adminImage"));
class TollController extends tollDao_1.default {
    createToll(req, res) {
        let objToll;
        objToll = req.body;
        let typeImage = objToll.public_toll_photo.split('.')[1];
        let namePhotoPrivate = 'IMG_' + (0, nanoid_1.nanoid)(15) + '.' + typeImage;
        objToll.private_toll_photo = namePhotoPrivate;
        let routeStorage = var_images_1.default.routePhotoSystem;
        adminImage_1.default.crearImagen(namePhotoPrivate, objToll.base64Toll, routeStorage);
        TollController.addToll(res, objToll);
    }
    readToll(req, res) {
        TollController.getToll(res);
    }
    updateToll(req, res) {
        const cod_toll = Number(req.params.idP);
        let objToll = req.body;
        let typeImage = objToll.public_toll_photo.split('.')[1];
        let namePhotoPrivate = 'IMG_' + (0, nanoid_1.nanoid)(15) + '.' + typeImage;
        objToll.private_toll_photo = namePhotoPrivate;
        let routeStorage = var_images_1.default.routePhotoSystem;
        adminImage_1.default.crearImagen(namePhotoPrivate, objToll.base64Toll, routeStorage);
        delete objToll.base64Toll;
        TollController.updateTolls(res, objToll, cod_toll);
    }
    deleteToll(req, res) {
        const cod_toll = Number(req.params.id);
        if (!isNaN(cod_toll)) {
            TollController.deleteToll(res, cod_toll);
        }
        else {
            res.status(400).json({ mensaje: "Código del peaje no valido" });
        }
    }
    seacrhTollById(req, res) {
        const codToll = Number(req.params.id);
        if (!isNaN(codToll)) {
            TollController.getOneTollById(res, codToll);
        }
        else {
            res.status(400).json({ mensaje: "Código de Routeo no valido" });
        }
    }
}
const tollController = new TollController();
exports.default = tollController;
