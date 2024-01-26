// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let kilomitres = prompt("Chilometri vuoi percorrere?");


let age = prompt("quanti?");

let price = 0.21 * kilomitres ;

let priceUnder = (price - ((price * 20) / 100));

let priceOver = (price - ((price * 40) / 100));



/* document.getElementById("prezzo").innerHTML = `Il prezzo del biglietto è "${price}" per gli under è "${priceUnder}" per gli over è "${priceOver}"`; */

if (age < 18){
    document.getElementById("prezzo").innerHTML = `Il prezzo è "${priceUnder}" `
} else if (age < 63){
    document.getElementById("prezzo").innerHTML = `Il prezzo è "${price}" `
} else {
    document.getElementById("prezzo").innerHTML = `Il prezzo è "${priceOver}" `
}
