/*
JSnack 1
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitati = [
    'Pippo',
    'Pluto',
    'Paperino',
    'Topolino',
    'Minnie'
]

let nome = document.getElementById("nome");
let button = document.getElementById("submit");
let result = document.getElementById("result");
let conicide = false;


console.log(nome);

button.addEventListener('click', function(){

    let username = nome.value;
    console.log(username);
    
    for(let index=0; index < invitati.length; index++)
    {
        if(invitati.includes(username))
        {
            conicide = true;
            console.log("accesso consentito");
        }else{
            conicide = false;
            console.log("accesso negato");
        }
    }
    if(conicide === true){
        result.innerHTML = `${username}, puoi accedere alla festa!!`;
    }else{
        result.innerHTML = `${username}, mi spiace ma non sei in lista!`;
    }
    
});
console.log(invitati)