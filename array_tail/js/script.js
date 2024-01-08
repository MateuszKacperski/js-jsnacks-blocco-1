console.log('Js ok');

//Chiedo un numero all'utente
const richiesta = parseInt(prompt('Dammi un numero da a tua scelta che sia maggiore di 6', '10'));
if(isNaN(richiesta) || richiesta < 6 || richiesta > 100){
    alert('Devi inserire un numero da 6 a 100');
}
//Stampo il numero inserito dall'utente 
console.log(richiesta);



//array vuoto

let array = [];


//Riempio l'array con i numeri casuali
for(let i = 0;i < richiesta; i++ ){
    //creo i numeri random
    const numeroRandom = Math.floor(Math.random()* 100) +1;
   // Inserisco i numeri all'interno dell'array
    array.push(numeroRandom);

  
}
//Stampo l'array
console.log(array);
//Faccio la differenza di lunghezza tra l'array iniziale e la parte finale che voglio vedere
const differenza = array.length - 5 
//Mi copio l'array prima di eliminare le parti
const newArray = [...array];

for (let i = 0; i < differenza; i++) {
    //Elimino le parti che non devono eseesre stampate dall'array
    newArray.shift(i);
}
//Stampo l'array
console.log(newArray);