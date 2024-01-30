// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// chiedo asll'utende il numero di chilometri e la memorizzo in una variabile 
// chiedo all'utente l'età e la memorizzo
// genero un prezzo base calcolato moltiplicando km * 0.21
// SE l'età è < 18// - allora applica sconro del 20%
// altrimetni se l'età >= 65 - allora applicasconto del 40%
// approssimare il prezzo a due cifre decimali
// stampare in pagina



/* let kilomitres = prompt("Chilometri vuoi percorrere?");
kilomitres = Number(kilomitres); */
const kilometres = Number(prompt("quanti chilometri vuoi fare?"));
/* console.log("kilomitres"); */
if(isNaN(kilometres) || kilometres < 1){
    alert("Hai inserito un numero errato,ricarica la pagina e inserisci un valore corretto");
}
/* let age = prompt("quanti anni hai?");
age = Number(age); */

// si può scrivere direttamente su una riga sola:

const age = Number ( prompt("Quanti anni hai?") );
/* console.log("age") */
if(isNaN(age) || age < 0 || age > 122){
    alert("Hai inserito un numero errato,ricarica la pagina e inserisci un valore corretto");
}
let price = 0.21 * kilometres;


/* let priceUnder = Math.round(((price - ((price * 20) / 100)) * 100) /100).toFixed(2);

let priceOver = Math.round(((price - ((price * 40) / 100)) * 100) /100).toFixed(2); */


let finalPrice = price;
let discountMessage = ""; //ho inserito una stringa vuota
/* document.getElementById("prezzo").innerHTML = `Il prezzo del biglietto è "${price}" per gli under è "${priceUnder}" per gli over è "${priceOver}"`; */

if (age < 18){
    //allora fai sconto del 20%
    finalPrice = price - price * 0.2;
    discountMessage = "E' stato apllicato uno sconto del 20% perchè sei minorenne."

/*     document.getElementById("prezzo").innerHTML = `Il prezzo è "${finalPrice}" ` */

} else if (age >= 65){
    //allora sconto 40%
    finalPrice = price - price * 0.4
/*     document.getElementById("prezzo").innerHTML = `Il prezzo è "${finalPrice}" `*/
}

document.getElementById("prezzo").innerHTML = `Il prezzo è ${finalPrice.toFixed(2)} <br> ${discountMessage}`