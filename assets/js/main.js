/*
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

/* 
tools
- prompt
- Number
- const/let
- Math.flor/Math.ceil
- if/else
- console.log
*/

//chiedo il numero di km da percorrere
const kmPercorsi = Number(prompt('Ciao, quanti chilometri devi percorrere?'));
console.log(kmPercorsi);

//chiedo quanti anni ha il passeggero
const etaPasseggero = Number(prompt('Quanti anni hai?'));
console.log(etaPasseggero);

//calcolo il prezzo del biglietto sulla base di 0.21 € al km
if (kmPercorsi > 0 && etaPasseggero > 0) {
    let prezzoBiglietto = (kmPercorsi * 0.21);
    console.log(prezzoBiglietto.toFixed(2));

    //i minorenni pagano il 20% in meno
    if(etaPasseggero < 18){
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20) / 100);
        console.log(prezzoBiglietto.toFixed(2));
    
    //gli over 65 pagano il 40% in meno
    } else if (etaPasseggero >= 65){
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40) / 100);
        console.log(prezzoBiglietto.toFixed(2));
    }

    //stampo il prezzo finale con un massimo di due cifre decimali (centesimi)

    const divPrezzoBiglietto = document.getElementById('prezzo_biglietto');
    console.info(divPrezzoBiglietto);

    divPrezzoBiglietto.innerHTML = 'Questo è l\'importo da pagare per il biglietto: ' + prezzoBiglietto.toFixed(2) + ' €';

    /* prezzoBiglietto.innerHTML = `Questo è l'importo da pagare per il biglietto: ${prezzoBiglietto.toFixed(2) + '€'} `; */
} else {
    alert('Dati errati o mancanti');
    location.reload();
}



