'use strict'
var div_usuarios=document.querySelector('#usuarios');
// .Ofrece una API para acceder a recursos tipicos como usuarios, mensajes de un foro y fotos
var usuarios=[];
//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users')
    .then (data=>data.json())
    .then (users=> {
        usuarios=users.data;
        console.log(usuarios);
//Crea un nuevo array con los resultados de la función
        usuarios.map((user,i)=> {
            let nombre=document.createElement("h2");
            nombre.innerHTML=i+ " " +user.first_name;
            div_usuarios.appendChild(nombre);
        });
    });

window.onload = function(){
    div_usuarios.addEventListener('click', mostrardatos);

    function mostrardatos(evt){
        console.log(evt.target.innerHTML);
        
    }
}