// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var listaCognomi = ["Bianchi", "Gialli","Rossi","Neri","Verdi"].map(v => v.toLowerCase());
console.log("lista originale" + " " + listaCognomi);

var cognomeUtente = prompt("Ciao! Inserisci il tuo cognome");

listaCognomi.push(cognomeUtente);
console.log("lista cognomi con cognome utente"+ " " + listaCognomi);

listaCognomi.sort();

console.log(listaCognomi + " " + "in ordine alfabetico");

console.log( listaCognomi.indexOf(cognomeUtente)+1);

for( var i= 0; i < listaCognomi; i++){
    var li =document.createElement("li");
    li.textContent=listaCognomi[i];
    document.getElementById("elenco").appendChild(li);
}