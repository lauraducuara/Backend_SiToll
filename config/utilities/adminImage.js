"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const var_images_1 = __importDefault(require("../domain/var_images"));
const sharp_1 = __importDefault(require("sharp"));
class AdminImage {
    static crearImagen(nombrePrivado, base64, rutaAlmacenamiento) {
        let decodificacion = base64.replace(/^data:image\/\w+;base64,/, "");
        fs_1.default.readdir(rutaAlmacenamiento, (error) => {
            if (error) {
                fs_1.default.mkdirSync(rutaAlmacenamiento, { recursive: true });
            }
            fs_1.default.writeFile(rutaAlmacenamiento + nombrePrivado, decodificacion, { encoding: "base64" }, function () { });
        });
    }
    static borrarImagen(rutaImagenBorrar) {
        console.log(rutaImagenBorrar);
        fs_1.default.unlink(rutaImagenBorrar, function (error) {
            if (error) {
                console.log("Fallo al borrar la imagen");
            }
        });
    }
    static cargarImagenBase64(fotoPrivada, rutaImagenPrivada, tamano) {
        let base64 = '';
        if (fs_1.default.existsSync(rutaImagenPrivada)) {
            let imagenMiniatura = var_images_1.default.routePhotoTemp + fotoPrivada;
            base64 = fs_1.default.readFileSync(rutaImagenPrivada, 'base64'); //antes de crear la minuatura leen la base 64, luego la crea y luego la borra
            AdminImage.crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamano);
            try {
                fs_1.default.unlinkSync(imagenMiniatura);
            }
            catch (error) {
                console.error("Error al eliminar la imagen temporal:", error);
            }
        }
        else {
            let rutaImagenError = var_images_1.default.photoError;
            base64 = fs_1.default.readFileSync(rutaImagenError, 'base64');
        }
        return base64;
    }
    static crearMiniatura(rutaImagenPrivada, imagenMiniatura, tamanno) {
        console.log(rutaImagenPrivada);
        const dataSharp = (0, sharp_1.default)(rutaImagenPrivada).resize({ width: tamanno })
            .toFile(imagenMiniatura, (miError) => {
            if (miError) {
                console.log(miError);
            }
            else {
                console.log("Miniatura creada correctamente:", imagenMiniatura);
            }
        });
    }
    static guardarImagenNueva(imagenBase64) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decodificacion = imagenBase64.replace(/^data:image\/\w+;base64,/, "");
                const rutaAlmacenamiento = var_images_1.default.routePhotoTemp;
                if (!fs_1.default.existsSync(rutaAlmacenamiento)) {
                    fs_1.default.mkdirSync(rutaAlmacenamiento, { recursive: true });
                }
                const nombreImagen = `nueva_imagen_${Date.now()}.jpg`;
                const rutaNuevaImagen = rutaAlmacenamiento + nombreImagen;
                yield fs_1.default.promises.writeFile(rutaNuevaImagen, decodificacion, { encoding: "base64" });
                return rutaNuevaImagen;
            }
            catch (error) {
                console.error("Error al guardar la nueva imagen:", error);
                throw error;
            }
        });
    }
}
exports.default = AdminImage;
