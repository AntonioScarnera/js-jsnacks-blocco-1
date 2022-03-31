/* 
JSnack 2
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/




const A = [];


 for(let i=0; i<6; i++)
 {
     let number =parseInt(prompt('Inserisci un numero'));
     
     if(number % 2 > 0){
         A.push(number);
         document.getElementById('container').innerHTML+= ' '+ A[A.length - 1];
         console.log( A[A.length - 1])
     }
     
}
console.log(A);