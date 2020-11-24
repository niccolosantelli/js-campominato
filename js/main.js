/*In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeriPc = [];
while (numeriPc.length !== 16){
  var number = getRandomNumber(1, 100);
  if (! inArray(numeriPc, number)){
     numeriPc.push(number);
  }
}
console.log(numeriPc, numeriPc.length);

function inArray(array, number){
  var i = 0;
  while (i < array.length){
    if (number === array [i]){
      return true;
    }
    i++;
  }
}

var numeriUtente = [];

for (var i = 0; i < 5; i++){
  var numeroUtente = prompt("inserisci un numero compreso tra 1 e 100");
  if (inArray(numeriPc, numeroUtente)){
    console.log("game over");
    break;
  }
  while (inArray(numeriUtente, numeroUtente)){
    alert("hai gia usato questo numero");
    numeroUtente = prompt("inserisci un numero tra 1 e 100")
  }
  numeriUtente.push(numeroUtente);
}
console.log(numeriUtente);





























/*var pcNumber = 0;
var pcArray = [];

for (var i=0; i < 16; i++){
  pcNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  pcArray.push(pcNumber);
}
console.log(pcArray);


 for (var i=0; i < 10; i++ ){
  domandaNumero = Number(prompt("inserisci numero"))
  console.log(domandaNumero);
}
var domanda = domandaNumero*/
