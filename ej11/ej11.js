let userGuess;

document.addEventListener("DOMContentLoaded", () => {
    userGuess = prompt("Indica el coche ganador 1 - 2");

    let startButton = document.getElementById("btnIniciar");
    startButton.addEventListener("click", startRace);
})

function startRace() {
    let car1 = document.getElementById("coche1");
    let car2 = document.getElementById("coche2");
    car1.style.left = "10px";
    car2.style.left = "10px";
    let maxWidth = window.innerWidth - 75;
    let posCar1 = 10;
    let posCar2 = 10;

    let id = setInterval(race, 8);
    function race() {
        if (posCar1 >= maxWidth || posCar2 >= maxWidth){
            clearInterval(id);
            let winner = posCar1 > posCar2 ? "1" : "2";
            winnerMessage(winner);
        } else {
            posCar1 += Math.random() * 3;
            posCar2 += Math.random() * 3;
            car1.style.left = posCar1 + 'px';
            car2.style.left = posCar2 + 'px';
        }
    }
}

function winnerMessage(winner){
    if (userGuess === winner){
        alert("¡Has ganado!");
    } else {
        alert("Has perdido :(");
    }
}
