/*
JSnack 3
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero
*/

let number = prompt('Inserisci un numero a 4 cifre');
console.log(number);

const A = number.split("");

console.log(A)
let somma = 0;
for(let i=0; i<A.length; i++){
    somma +=parseInt(A[i]);
}
console.log(somma);
document.getElementById('container').innerHTML= somma;