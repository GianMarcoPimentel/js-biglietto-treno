const X = prompt("Scegli 1 , 2 o 3");
console.log("SceltaUtente" ,X);
const Y = Math.floor( Math.random() * 3);
console.log("SceltaComputer", Y)

if (X=Y){
    document.getElementById("risultato").innerHTML = `La scelta è la stessa. Pareggioo. Gioca di nuovo`
} else if (X == 1 && Y== 2) or (X == 2 && Y==3) {
    document.getElementById("risultato").innerHTML = `Hai perso`
} else if {
    
}