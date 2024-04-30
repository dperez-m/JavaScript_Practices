

// function sumar( a, b ) {
//     return a + b;
// }

const sumar = (a, b) => a + b;

const saludar = () => 'Hola Mundo';


console.log(  sumar( 5, 10 )   );
console.log(  saludar()   );
//numeros();
numeros2();



//ejemplo de codigo sincrono
function numeros() {
    console.log("Uno");
    alert(saludar());
    console.log("Dos");
    console.log("Tres");
}

//Aqui pasamos a una función de tiempo de espera que inicia un temporizador de
//forma asíncrona,
//Esto significa que el temporizador se ejecutará en segundo plano, sin emepdir que se ejecute
//el código principal.

function numeros2() {
    console.log("Uno");
    setTimeout(function(){console.log("Dos");},5000)
   
    console.log("Tres");
}