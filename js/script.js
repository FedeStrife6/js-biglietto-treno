
// Domande al cliente
var km = ( prompt( 'Quanti km dovrai percorrere?' ));

var etaUtente = ( prompt( 'Quanti anni hai?' ));

// Prezzo del biglietto Intero
var bigliettoIntero = km * 0.21;

// Scontistiche junior e senior

var scontoJunior = ((km * 0.21 / 100) * 20);

var scontoSenior = ((km * 0.21 / 100) * 40);

var bigliettoScontatoJunior = bigliettoIntero - scontoJunior;

var bigliettoScontatoSenior = bigliettoIntero - scontoSenior;

if (etaUtente > 65) {
  document.getElementById('prezzo_finale').innerHTML = ('Il prezzo del tuo biglietto è  ' + bigliettoScontatoSenior + ' €' )
  alert('hai ottenuto sconto del 40%');

} else if (etaUtente < 18) {
  document.getElementById('prezzo_finale').innerHTML = ('Il prezzo del tuo biglietto è  ' + bigliettoScontatoJunior + ' €' )
    alert('hai ottenuto sconto del 20%');

} else {
  document.getElementById('prezzo_finale').innerHTML = ('Il prezzo del tuo biglietto è  ' + bigliettoIntero + ' €' )
}

// In caso ci sia un errore
if (((isNaN(km)) || (isNaN(etaUtente)))) {
  console.log(false);
  alert('Dati non validi.Riprovare.');
} else {
    console.log(true);
}
