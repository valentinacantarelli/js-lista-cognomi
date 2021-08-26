// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var listaCognomi = ["Bianchi", "Gialli","Rossi","Neri","Verdi"].map(v => v.toLowerCase());

var cognomeUtente = prompt("Ciao! Inserisci il tuo cognome");

listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

listaCognomi.sort();

console.log(listaCognomi + " " + "in ordine alfabetico");