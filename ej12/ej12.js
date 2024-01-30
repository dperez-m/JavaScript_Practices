function validate(){
    let element = document.getElementById('nombre');
    element.value = element.value.replace(/[^a-zA-Z]+/, '');

}