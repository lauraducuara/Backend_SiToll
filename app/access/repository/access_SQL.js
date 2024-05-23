"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESO = void 0;
exports.SQL_ACCESO = {
    DATOS_ACCESO: "SELECT a.cod_usuario, u.nombres_usuario, u.apellidos_usuario, \
    u.rol_usuario, a.nombre_acceso \
    FROM accesos a INNER JOIN usuarios u ON a.cod_usuario=u.cod_usuario\
    WHERE a.cod_usuario=$1"
};
