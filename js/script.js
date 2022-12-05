////console.log ('JS OK')
//~-----------------------------------------------------------------------------------------------------------------------------------------------------------~//
//!GENERAL
//^ TRACCIA
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
//~------------------------------------------------~//
//^ ANALISI
//* 1 - Prendere l'elemento dal DOM
//* 2 - Chiedere all'utente il numero di KM che vuole percorrere E la sua età
//* 3 - Calcoliamo il prezzo totale del viaggio:
//- (3A) In base alla risposta che l'utente ci ha dato moltiplichiamo il valore della distanza per 0.21.
//- (3B) Al prezzo totale del punto 3A sottraiamo il 20%, che è lo sconto riservato ai Minorenni.
//- (3C) Al prezzo totale del punto 3A sottraiamo  il 40%, che è lo sconto riservati agli Over 65.
//* - Il prezzo finale dovrà uscire con massimo due decimali per indicare i centesimi.
//~-----------------------------------------------------------------------------------------------------------------------------------------------------------~//
//!WORK
//* 1 - PRENDERE L'ELEMENTO DAL DOM



