//Crea un programma che chiede all'utente una temperatura in gradi Celsius e la converte in Fahrenheit

let degrees = prompt("Quanti gradi Celsius vuoi convertire?")

let fahrenheit = ((degrees * 9 / 5) + 32);

document.getElementById("Fahrenheit").innerHTML = `I gradi Fahrenheit sono ${fahrenheit}`;