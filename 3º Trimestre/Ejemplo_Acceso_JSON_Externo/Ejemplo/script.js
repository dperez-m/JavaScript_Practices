// Declaración del Objeceto producto
var producto = {
    nombre: "",
    precio: "",
    descripcion: "",
    image: ""
}

// Obtenermos la url acutal del navegador
let obtenerUrlActual = window.location;
console.log("ola!" + obtenerUrlActual);
// Hacemos un split de la url cortando el texto por un lado la url y por otra lo que esta después del ?id=
var idURL = obtenerUrlActual.toString().split('?id=');
console.log(idURL);

// Comprobamos que el array de la url tenga 2 elementos
if (idURL.length === 2) {
    if (!isNaN(idURL[1])) {

        fetch('productos.json')
            .then(response => response.json())
            .then(data => {

                console.log(data.products[idURL[1]].price);

                if (data.products.length >= idURL[1]) {

                    producto.nombre = data.products[idURL[1]].productName;
                    producto.precio = data.products[idURL[1]].price;
                    producto.descripcion = data.products[idURL[1]].description;
                    producto.image = data.products[idURL[1]].image;
                }

                document.getElementById("name").innerText = producto.nombre;
                document.getElementById("descripcion_text").innerText = producto.descripcion;
                document.getElementById("precio_producto").innerText = "Precio: " + producto.precio + "€";
                document.getElementById("img_producto").innerText = 'https://panaderias.ml/' + producto.image;

            });
            



    }

}

document.getElementById("boton").addEventListener("click", (evt) => {

    evt.preventDefault();

    var num_aleatorio = Math.floor(Math.random() * (11 - 1) + 1);

    window.location.href = idURL[0] + "?id=" + num_aleatorio;
});