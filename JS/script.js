// CONSEGNA //

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// FINE CONSEGNA //


// RACCOLTA DATI //

// chiedere all'utente il numero di chilometri che vuole percorrere;
// chiedere all'utente l'età del passeggero;
// il prezzo del biglietto è definito in base ai km (0.21 € al km);

// FINE RACCOLTA DATI //


// ESECUZIONE LOGICA //

/**
 * se il passeggero é minorenne
 *      applico uno sconto del 20%
  
 * se il passeggero é maggiorenne under 65
 *      paga il biglietto intero (0,21€ al km)
 
 * se il passeggero é maggiorenne over 65
 *      applico uno sconto del 40%
*/

// FINE ESECUZIONE LOGICA //


// OUTPUT //
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




// RACCOLTA DATI //
const chilometri = prompt ("digita i chilometri da percorrere");
console.log(chilometri);

const etàPasseggero = prompt ("digita l'età del passeggero");
console.log(etàPasseggero);

const prezzoBiglietto = "Prezzo del biglietto";
console.log(prezzoBiglietto);
// RACCOLTA DATI //


// ESECUZIONE LOGICA //
if (etàPasseggero <18) {
    console.log(chilometri * 20 / 100)
} else if (etàPasseggero >=18 && etàPasseggero <=65) {
    console.log(chilometri * 0,21)
} else if (etàPasseggero >=65) {
    console.log(chilometri * 40 / 100)
}