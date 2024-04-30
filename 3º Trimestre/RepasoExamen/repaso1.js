'use strict'

class Cliente{
    constructor(nombre, dni, direccion){
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
    }

    toString(){
        return "Nombre: " + this.nombre + "\nDni: " + this.dni + "\nDireccion: " + this.direccion;
    }
}

document.addEventListener('DOMContentLoaded', () => {
const cliente = new Cliente("Dani", "54429671X", "Cmno Goaldino");
const cliente2 = new Cliente("Armada", "12345678D", "Cangas");
const cliente3 = new Cliente("Breo", "87654321W", "Io");
const boton = document.getElementById("btn");
const table = document.getElementById("table");

localStorage.setItem(cliente.dni, JSON.stringify(cliente));
localStorage.setItem(cliente2.dni, JSON.stringify(cliente2));
localStorage.setItem(cliente3.dni, JSON.stringify(cliente3));
boton.addEventListener("click", mostrarStorage);
table.addEventListener("click", deleteRow);

function mostrarStorage() {
    deleteTable();
    for (let i = 0; i < localStorage.length; i++) {
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdDNI = document.createElement("td");
        let tdDireccion = document.createElement("td");

        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        tdNombre.innerHTML = data.nombre;
        tdDNI.innerHTML = data.dni;
        tdDireccion.innerHTML = data.direccion;

        tr.appendChild(tdNombre);
        tr.appendChild(tdDNI);
        tr.appendChild(tdDireccion);
        table.appendChild(tr);
    }
}

function deleteTable(){
    if (table.children.length > 0) {
        for (let i = 0; i < table.children.length; i++) {
            table.children[i].remove();
        }
    }
}

function deleteRow(evt){
    if (evt.target.innerHTML !== "Nombre" && evt.target.innerHTML !== "Dni" && evt.target.innerHTML !== "Direccion"){
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
    }
}
})