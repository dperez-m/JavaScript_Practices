


    //Promesas. 
//Objeto que indica que puede llegar un resultado con resolve o nunca con reject

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola que tal estas";
        
        //En el caso de que no exista la variable saludo
        //Ejecuta el metodo catch
       // saludo = null;
        if (saludo) {
            resolve(saludo);
        } else {
            reject("No hay saludo disponible");
        }
    }, 2000);
});

//Metodo then: Se ejecuta cuando recibimos un resultado
//Metodo catch: Se utiliza para capturar el posible error
saludar.then(resultado => {
    
        alert(resultado);
        
    })
    .catch(err => {
        alert(err);
    })