// setTimeout( () => {
//     console.log('Hola Mundo');
// } , 1000 );
const getUsuarioByID = (id) => {


        const usuario = {

            id: id,
            nombre: 'Fernando'
        }

        setTimeout(() => {
            //Mandar de retorno
            console.log(usuario)
        }, 1500)

    }
    //Llamada a la funcion 
getUsuarioByID(10);

/*const getUsuarioByID = (id, callback) => {

    const user = {

        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(user)
    }, 1500)

}


getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});*/