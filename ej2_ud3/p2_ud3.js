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
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formalumnos");
    const nombre = document.getElementById("Nombre");
    const direccion = document.getElementById("Direccion");
    const dni = document.getElementById("Dni");
    const mostrar = document.getElementById("alumnos");
    const botonMostrar = document.getElementById("mostrar");
    const botonBorrar = document.getElementById("borrar");
    const alumnoAEliminar = document.getElementById("removeAlumno");

    form.addEventListener("submit", guardarAlumno);
    botonMostrar.addEventListener("click", mostrarAlumnos);
    botonBorrar.addEventListener("click", eliminarAlumno);

    function guardarAlumno() {
        const alumno = new Alumno(nombre.value, dni.value, direccion.value);
        localStorage.setItem(alumno.dni, JSON.stringify(alumno));
        alert(`Se ha guardado el alumno ${alumno.nombreA} correctamente.`);
    }
    function mostrarAlumnos() {
        eliminarTabla();
        let tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaAlumnos");
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
        tabla.addEventListener("contextmenu", modificarAlumno);
    }

    function modificarAlumno(event){
        let alumnoKey = event.target.parentNode.children[0];
        if (localStorage.getItem(alumnoKey.innerHTML)) {
            event.preventDefault();
            let alumnoAModificar = JSON.parse(localStorage.getItem(alumnoKey.innerHTML));
            nombre.value = alumnoAModificar._nombreA;
            direccion.value = alumnoAModificar._direccion;
            dni.value = alumnoAModificar._dni;
            dni.readOnly = true;
            dni.style.opacity = "0.7";
            document.getElementById("guardar").value = "Modificar";
        }
    }

    function eliminarAlumno(){
        for (let i = 0; i < localStorage.length; i++){
            let alumno = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if (alumno._dni === alumnoAEliminar.value){
                localStorage.removeItem(localStorage.key(i));
            }
        }
        mostrarAlumnos();
    }

    function eliminarTabla(){
        if (document.getElementById("tablaAlumnos")){
            let tabla = document.getElementById("tablaAlumnos");
            mostrar.removeChild(tabla);
        }
    }
});