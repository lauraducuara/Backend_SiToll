"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_REGISTRY = void 0;
exports.SQL_REGISTRY = {
    DATA_token: "SELECT a.cod_usuario, u.nombres_usuario, u.apellidos_usuario, \
    a.nombre_acceso, u.rol_usuario \
    FROM usuarios u INNER JOIN accesos a on a.cod_usuario= u.cod_usuario \
    WHERE u.cod_usuario =$1"
};
