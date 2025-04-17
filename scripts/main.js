import { Aprendiz, NivelEducativo } from "./aprendiz.js";
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    var ap = new Aprendiz("Margarita", "Forero", "avatar.png", 30, NivelEducativo.POSGRADO);
    var aprendizTable = document.getElementById("aprendiz");
    if (aprendizTable) {
        mostrarDatosAprendiz(ap, aprendizTable);
    }
    else {
        console.error("No se encontró el elemento con id 'aprendiz'");
    }
});
function mostrarDatosAprendiz(aprendiz, tabla) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n        <tr><td colspan=\"2\"><img src=\"".concat(aprendiz.avatar, "\" alt=\"Avatar del aprendiz\" height=\"100\"></td></tr>\n        <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n        <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n        <tr><td>Nivel:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n        <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>\n    ");
    tabla.appendChild(tbodyAprendiz);
}
