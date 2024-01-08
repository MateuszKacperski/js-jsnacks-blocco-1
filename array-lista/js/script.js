console.log('Js ok');


//Creo arry frigo
const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
//Creo variabile frutto
const frutto = 'pesca';

//Aggiungo la variabile all'array
frigo.push(frutto);
//Stampo in console
console.table(frigo);


let hasWatermelon = false;

for (let i=0; i < frutto.length && !hasWatermelon; i++){
    if(frutto[i] === 'cocomero'){
        hasWatermelon = true;
    }
}
let message;

if(hasWatermelon){
    message = 'Trovato ! Devo solo preparare il coctail.';
}else{
    message = 'Oh no devo uscire a comprare il cocomero!'
}

console.log(message);