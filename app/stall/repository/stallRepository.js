"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_STALLS = void 0;
exports.SQL_STALLS = {
    STALL_SQL: "SELECT pu.cod_puesto AS codPuesto, pu.cod_peaje AS codPeaje, pu.horario_puesto, pe.nombre_peaje AS nombrePeaje FROM puestos pu JOIN peajes pe on pu.cod_peaje = pe.cod_peaje ",
    STALL_SQL_ID: `
    SELECT pu.cod_puesto AS codPuesto, pu.cod_peaje AS codPeaje, pu.horario_puesto, pe.nombre_peaje AS nombrePeaje FROM puestos pu JOIN peajes pe on pu.cod_peaje = pe.cod_peaje WHERE pu.cod_puesto = $1`
};
