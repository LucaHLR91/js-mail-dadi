// **Mail**
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Chiedo la e-mail del'utente
var email_utente = prompt('Inserisci la tua e-mail');

// Lista email utenti
var lista_mail = ['luca@gmail.com', 'marco@gmail.com', 'laura@gmail.com', 'elena@gmail.com', 'martina@gmail.com', 'paolo@gmail.com'];

// Verifica utente
var trovato = false;

for (var i = 0; i < lista_mail.length; i++) {
    if (email_utente == lista_mail[i]){
        alert('puoi accedere');
        trovato = true;
        document.getElementById('benvenuto').innerHTML = 'Benvenuto';
    }
}

if (trovato != true) {
    alert('non puoi accedere')
}