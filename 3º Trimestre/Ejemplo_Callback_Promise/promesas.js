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



const id = 3;
const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)
    if (empleado)
        return empleado;

    else {

        return (`No existe empleado con id ${id}`);
    }
}

const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id);

    if (salario)
        return salario;

    else {

        return (`No existe salario del empleado con id ${id} `);
    }
}
console.log(getEmpleado(id));
console.log(getSalario(id));


//Ejemplo de otra promesa
let promesa=new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve('Ha resultado un trabajo exitoso');
    } , 1000 );
   // reject("Error"); Solo puede haber un resultado o resolve o reject
});

console.log(promesa);