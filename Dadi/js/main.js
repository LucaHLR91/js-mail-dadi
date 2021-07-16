// **Gioco dei dadi**
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// array dei numeri

var myArray = [1, 2, 3, 4, 5, 6];

// numero random utente
var numero_utente = myArray[Math.floor(Math.random() * myArray.length)];

// numero random computer
var numero_computer = myArray[Math.floor(Math.random() * myArray.length)];

// stabilire chi vince
if (numero_utente > numero_computer) {
    console.log(numero_utente, numero_computer);
    alert('giocatore vince');
}else {
    console.log(numero_utente, numero_computer);
    alert('computer vince');
}

