const sceltaUtente = prompt("Scegli Carta Forbice Sasso");
/* console.log("sceltaUtente" ,sceltaUtente) */

//facciamo scegliere ranndomicamente al computer
//possimo avere una variabile che sia uguale a un numro intero per la scelta random dove:
// il valore 0 corrisponderà a carta
// il valore 1 corrisponderà a  forbici
// il valore 2 corrisponderà a sasso
const sceltaComputer = Math.floor( Math.random() * 3);

// introduco la variabile conversioneComputer 
// per assegnare al numero il valore di una stringa
let conversioneComputer;
 // conversione da numero a strigna
if(sceltaComputer == 1) {
    conversioneComputer = "carta";
} else if (sceltaComputer == 2){
    conversioneComputer = "forbici";
} else {
    conversioneComputer = "sasso";
}
/* console.log("sceltaComputer" , sceltaComputer) */

if(sceltaUtente == sceltaComputer){
    document.getElementById("risultato").innerHTML = `Avete pareggiato!`
} else if (sceltaUtente == "carta") {
    if (conversioneComputer == "sasso"){
    document.getElementById("risultato").innerHTML = `Hai vinto!`
    } else {
        document.getElementById("risultato").innerHTML = `Hai Perso!`
    }
} else if (sceltaUtente == "forbici"){
    if(conversioneComputer == "carta"){
    document.getElementById("risultato").innerHTML = `Hai vinto!`
    }else {
        document.getElementById("risultato").innerHTML = `Hai Perso!`
    }
} else{
    if(conversioneComputer == "forbici"){
        document.getElementById("risultato").innerHTML = `Hai vinto!`
        }else {
            document.getElementById("risultato").innerHTML = `Hai Perso!`
        }
}
