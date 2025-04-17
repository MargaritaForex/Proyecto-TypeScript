import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Prácticas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, true, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    var ap = new Aprendiz("Margarita", "Forero", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
    console.log(ap.cursos);
    var aprendizTable = document.getElementById("aprendiz");
    var estadisticasTable = document.getElementById("estadisticas");
    var cursosTable = document.getElementById("cursos");
    mostrarDatosAprendiz(ap, aprendizTable);
    mostrarEstadisticas(ap, estadisticasTable);
    mostrarCursosAprendiz(ap, cursosTable);
});
function mostrarDatosAprendiz(aprendiz, tabla) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n        <tr><td colspan=\"2\"><img src=\"".concat(aprendiz.avatar, "\" alt=\"Avatar del aprendiz\" height=\"100\"></td></tr>\n        <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n        <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n        <tr><td>Nivel:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n        <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>\n    ");
    tabla.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz, tabla) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>".concat(numeroCertificados, "</td>");
    tabla.appendChild(trElement);
}
function mostrarCursosAprendiz(aprendiz, tabla) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(curso.nombre, "</td>\n            <td>").concat(curso.horas, "</td>\n            <td>").concat(curso.calificacion, "</td>\n            <td>").concat(curso.certificado, "</td>\n            <td>").concat(curso.anio, "</td>\n        ");
        cursosTbody.appendChild(trElement);
    }
    tabla.appendChild(cursosTbody);
}
