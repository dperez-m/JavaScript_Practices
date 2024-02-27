'use strict'

class Alumno {

    constructor(nombreA, dni, direccion) {
        this._dni = dni;
        this._nombreA = nombreA;
        this._direccion = direccion;
    }

    get dni() {
        return this._dni;
    }
    get nombreA() {
        return this._nombreA;
    }

    get direccion() {
        return this._direccion;
    }

    modificar(){
        this._nombreA = NOMBRE;
        this._direccion = DIRECCION;
    }

    mostrar() {

    }
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formalumnos");
    const nombre = document.getElementById("Nombre");
    const direccion = document.getElementById("Direccion");
    const dni = document.getElementById("Dni");
    const mostrar = document.getElementById("alumnos");
    const botonMostrar = document.getElementById("mostrar");

    form.addEventListener("submit", guardarAlumno);
    botonMostrar.addEventListener("click", mostrarAlumnos);

    function guardarAlumno() {
        const alumno = new Alumno(nombre.value, dni.value, direccion.value);
        localStorage.setItem(alumno.dni, JSON.stringify(alumno));
        alert(`Se ha guardado el alumno ${alumno.nombreA} correctamente.`);
    }
    function mostrarAlumnos() {
        let tabla = document.createElement("table");
        let th = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let thDni = document.createElement("td");
        thDni.innerHTML = "DNI";
        let thNombre = document.createElement("td");
        thNombre.innerHTML = "NOMBRE";
        let thDireccion = document.createElement("td");
        thDireccion.innerHTML = "DIRECCION";

        th.appendChild(thDni);
        th.appendChild(thNombre);
        th.appendChild(thDireccion);
        tabla.appendChild(th);

        for (let i = 0; i < localStorage.length; i++) {
            let tr = document.createElement("tr");
            const alumno = JSON.parse(localStorage.getItem(localStorage.key(i)));

            const tdDni = document.createElement('td');
            tdDni.innerHTML = alumno._dni;
            const tdNombre = document.createElement('td');
            tdNombre.innerHTML = alumno._nombreA;
            const tdDireccion = document.createElement('td');
            tdDireccion.innerHTML = alumno._direccion;

            tr.appendChild(tdDni);
            tr.appendChild(tdNombre);
            tr.appendChild(tdDireccion);
            tbody.appendChild(tr);
            tabla.appendChild(tbody);
        }
        mostrar.appendChild(tabla);
    }
});