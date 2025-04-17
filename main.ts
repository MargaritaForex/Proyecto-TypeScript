import { Aprendiz, NivelEducativo } from "./aprendiz.js";

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const ap = new Aprendiz("Margarita", "Forero", "avatar.png", 30, NivelEducativo.POSGRADO);
    const aprendizTable: HTMLElement | null = document.getElementById("aprendiz");
    
    if (aprendizTable) {
        mostrarDatosAprendiz(ap, aprendizTable);
    } else {
        console.error("No se encontró el elemento con id 'aprendiz'");
    }
});

function mostrarDatosAprendiz(aprendiz: Aprendiz, tabla: HTMLElement): void {
    const tbodyAprendiz = document.createElement("tbody");
    
    tbodyAprendiz.innerHTML = `
        <tr><td colspan="2"><img src="${aprendiz.avatar}" alt="Avatar del aprendiz" height="100"></td></tr>
        <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
        <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
        <tr><td>Nivel:</td><td>${aprendiz.nivelEducativo}</td></tr>
        <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>
    `;

    tabla.appendChild(tbodyAprendiz);
}
