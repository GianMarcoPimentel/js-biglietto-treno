let firstNumber = Number(prompt("Inserisci il primo numero"));
let secondNumber = Number(prompt("Inserisci il secondo numero"));
let thirdNumber = Number(prompt("Inserisci il terzo numero"));


const somma = Math.round(((firstNumber+secondNumber+thirdNumber) * 100) / 100).toFixed(2); 

document.getElementById("somma").innerHTML = `La somma è "${somma}"`

const media = Math.round (((somma / 3) * 100 ) / 100).toFixed(2);


document.getElementById("media").innerHTML = `La media dei numeri inseriti dall'utente è "${media}"`