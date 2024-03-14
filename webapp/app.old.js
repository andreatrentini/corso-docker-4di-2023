// Dichiaro una costante chiamata come voglio, per semplicità usiamo il nome express
// che come valore ha l'intero package express installato
// require: carica il nome del package o il nome del file indicato fra parentesi
const express = require('express');

// Dichiaro un0istanza (significa in javascript eseguire la funzione che il nome della classe)
// di express

const app = express();

// Metto la mia applicazione in ascolto di richieste http in arrivo sulla rete.
// Il primo primo parametro rappresenta la URL alla quale rispondo con questo metodo
// ovviamenmte dopo il nome del server e della eventuale porta
// Il secondo parametro è la funzione di callback (ho usato la sintassi lambda)
// richiesta conterrà la richiesta in arrivo dal browser, in risposta devo inserire
// il testo, la pagina, i dati da inviare al browser
app.get('', (richiesta, risposta)=> {
    // Codice da eseguire quando arriva una richiesta al server
    //risposta.json('Hello world!');
    // Questo sistema funziona solo se devo mettere il server in ascolto per inviare un singolo file
    // Un sito web normalmente è composto da decino o centinaia di file
    // Scrivere il codice del server per un sito con queste caratteristiche è impensabile
    risposta.sendFile(__dirname + '/sito/index.html');
});

app.get('/style.css', (richiesta, risposta) => {
    risposta.sendFile(__dirname + '/sito/style.css');
})

// Dobbiamo creare un server e lo dobbiamo mettere in ascolto su una porta TCP (3000)
const server = app.listen(3000, ()=> {
    console.log('Server in ascolto sulla porta 3000...');
})