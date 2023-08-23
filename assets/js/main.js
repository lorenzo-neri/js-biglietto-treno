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
const kmPercorsi = prompt('Ciao, quanti chilometri devi percorrere?');
console.log(kmPercorsi);

//chiedo quanti anni ha il passeggero
const etaPasseggero = prompt('Quanti anni hai?')
console.log(etaPasseggero);

//calcolo il prezzo del biglietto sulla base di 0.21 € al km
const prezzoBiglietto = (kmPercorsi * 0.21)
console.log(prezzoBiglietto);

//i minorenni pagano il 20% in meno

//gli over 65 pagano il 40% in meno

//stampo il prezzo finale con un massimo di due cifre decimali (centesimi)
