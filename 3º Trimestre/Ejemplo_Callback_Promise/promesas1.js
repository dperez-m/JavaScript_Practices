//Ejemplo de creación de promesas desde cero

const empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

/*
Operador ternario
El operador ternario es un operador condicional que se utiliza para simplificar el código 
cuando se necesita comprobar una condición y ejecutar un código diferente dependiendo del resultado.

La sintaxis del operador ternario es la siguiente:

condición ? expresión1 : expresión2

La expresión1 se ejecuta si la condición es verdadera, y la expresión2 se ejecuta si la condición es falsa.

Ejrmplo:
let variable = true;

variable ? console.log("La variable es verdadera") : console.log("La variable es falsa");

// La variable es verdadera
En este ejemplo, la variable es verdadera, por lo que se ejecuta la expresión1, 
que es la que imprime el mensaje en la consola.

let variable = false;

variable ? console.log("La variable es verdadera") : console.log("La variable es falsa");

// La variable es falsa
En este ejemplo, la variable es falsa, por lo que se ejecuta la expresión2, que es la que imprime el mensaje en la consola.

El operador ternario también se puede utilizar para asignar un valor a una variable 
dependiendo de la condición.

let variable = true;

let mensaje = variable ? "La variable es verdadera" : "La variable es falsa";

console.log(mensaje);

// La variable es verdadera
Un ejemplo más complejo sería el siguiente:

let variable = 2;

let mensaje = variable === 1 ? "La variable es 1" : variable === 2 ? "La variable es 2" : "La variable es diferente de 1 y 2";

console.log(mensaje);

// La variable es 2
En este ejemplo se puede observar que se utiliza el operador ternario para asignar un valor a la variable 
mensaje, dependiendo de la condición. Si la variable es 1, se asigna el mensaje “La variable es 1”, si es 2, 
se asigna el mensaje “La variable es 2”, y si es diferente de 1 y 2, se asigna el mensaje “La variable 
es diferente de 1 y 2”.

De esta manera se puede simplificar el código y hacerlo más legible cuando se necesitan realizar 
ciertas condiciones dentro del flujo de un programa


*/
/*const getEmpleado = (id) => {
crea un promesa
const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        resolve(empleado);
    } else {
        reject(`No existe el empleado con id ${id}`);
    }
});
return promesa;
};*/

//Código simplificado

const getEmpleado = (id) => {

    //La promesa son n object que puede estar en un estado concreto: pendiente, aceptada o rechazada. 
    return promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id);

        (empleado) ? resolve(empleado):
            reject(`No existe el empleado con id ${id}`);

    });

};

const getSalario = (id) => {
    return promesa = new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id);
        (salario) ? resolve(salario):
            reject(`No existe el salario del empleado con id ${id}`);
    })
};

//Inicializamos el código de empleado con el identificador 2 y se ejecutan las funciones. 
const id = 2;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));
    
console.log("codigo síncrono que se ejecuta porque el then es asíncrono no bloqueante")

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));