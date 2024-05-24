"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USTU = void 0;
exports.SQL_USTU = {
    USTU_QUERY: `
        SELECT u.cod_usuario, u.nombres_usuario, u.apellidos_usuario, p.cod_puesto, p.horario_puesto, t.*,
        pe.nombre_peaje AS nombrePeaje FROM  turnos_usuarios tr JOIN usuarios u ON u.cod_usuario = tr.cod_usuario JOIN puestos p ON p.cod_puesto = tr.cod_puesto JOIN turnos t ON tr.cod_turno = t.cod_turno JOIN peajes pe ON p.cod_peaje = pe.cod_peaje;
    `,
    USTU_QUERY2: `
        SELECT 
        pe.nombre_peaje AS nombrePeaje FROM  turnos_usuarios tr JOIN usuarios u ON u.cod_usuario = tr.cod_usuario JOIN puestos p ON p.cod_puesto = tr.cod_puesto JOIN turnos t ON tr.cod_turno = t.cod_turno JOIN peajes pe ON p.cod_peaje = pe.cod_peaje;
    `,
    USTU_QUERY_ID: `
        SELECT u.cod_usuario, u.nombres_usuario,  u.apellidos_usuario,  p.cod_puesto, p.horario_puesto, t.*,
        pe.nombre_peaje AS nombrePeaje FROM turnos_usuarios tr JOIN  usuarios u ON u.cod_usuario = tr.cod_usuario JOIN puestos p ON p.cod_puesto = tr.cod_puesto JOIN turnos t ON tr.cod_turno = t.cod_turno JOIN peajes pe ON p.cod_peaje = pe.cod_peaje WHERE tr.cod_usuario = $1 AND tr.cod_puesto = $2 AND tr.cod_turno = $3;
    `
};
