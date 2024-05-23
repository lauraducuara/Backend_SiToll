"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TOLL = void 0;
exports.SQL_TOLL = {
    TOLL_QUERY: "SELECT r.cod_ruta, r.nombre_ruta, p.cod_peaje, p.nombre_peaje, p.public_toll_photo, p.private_toll_photo FROM peajes p JOIN rutas r ON p.cod_ruta = r.cod_ruta ORDER BY p.nombre_peaje ASC",
    TOLL_ID: "SELECT r.nombre_ruta, p.cod_peaje, p.nombre_peaje, p.public_toll_photo, p.private_toll_photo FROM peajes p JOIN rutas r ON p.cod_ruta = r.cod_ruta WHERE p.cod_peaje =$1 ORDER BY p.nombre_peaje ASC"
};
