"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROUTE_DEPARTMENT = void 0;
exports.SQL_ROUTE_DEPARTMENT = {
    ROUTE_DEP: "SELECT rd.cod_ruta AS codRuta, rd.cod_departamento AS codDepartamento, rd.cod_departamento_ruta, r.nombre_ruta, d.nombre_departamento, rd.fecha_creacion_departamento_ruta AS fechaCreacionDepartamentoRuta FROM rutas r JOIN departamentos_rutas  rd on rd.cod_ruta = r.cod_ruta JOIN departamentos d ON rd.cod_departamento = d.cod_departamento"
};
