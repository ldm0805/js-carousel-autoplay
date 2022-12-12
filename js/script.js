//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA
//Array items
const items = document.getElementsByClassName('item');
//Indice degli array
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione
//Array circles
const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


//funzione anonima per il carosello automatico



function autoCarusel(){
       
     if (itemActive < imagesArray.length -1){
         //rimuovo la classe active al nuovo elemento dell'array items 
         items[itemActive].classList.remove('active');
      
         //rimuovo la classe active al nuovo elemento dell'array circle 
         circles[itemActive].classList.remove('active');
  
         //incremento il suo valore di 1
         ++itemActive;
         //aggiungo la classe active al nuovo elemento dell'array items
         items[itemActive].classList.add('active');
        //aggiungo la classe active al nuovo elemento dell'array circle
         circles[itemActive].classList.add('active');
         }   
  
     else{
         //rimuovo la classe active al nuovo elemento dell'array items 
         items[itemActive].classList.remove('active');
         //rimuovo la classe active al nuovo elemento dell'array circle 
         circles[itemActive].classList.remove('active');
  
         //assegno ad itemActive 0
         itemActive = 0;
         //aggiungo la classe active al nuovo elemento dell'array items
         items[itemActive].classList.add('active');
         //aggiungo la classe active al nuovo elemento dell'array circle
         circles[itemActive].classList.add('active');
         }
}

// Intervallo da 1.5 secondi
setInterval(autoCarusel,1500);
console.log(autoCarusel)


// prev.addEventListener('click', function(){
//     //verifico l'elemento attivo (itemActive)
//     if (itemActive > 0){

//         //rimuovo la classe active al nuovo elemento dell'array items 
//         items[itemActive].classList.remove('active');

//         //rimuovo la classe active al nuovo elemento dell'array circle 
//         circles[itemActive].classList.remove('active');
    
//         //decremento il suo valore di 1
//         itemActive--;

//         //aggiungo la classe active al nuovo elemento dell'array items
//         items[itemActive].classList.add('active');

//         //aggiungo la classe active al nuovo elemento dell'array circle
//         circles[itemActive].classList.add('active');
//     }

//     else{

//         //rimuovo la classe active al nuovo elemento dell'array items 
//         items[itemActive].classList.remove('active');

//         //rimuovo la classe active al nuovo elemento dell'array circle 
//         circles[itemActive].classList.remove('active');
        
//         //incremento il suo valore di 1
//         itemActive = imagesArray.length-1;
        
//         //aggiungo la classe active al nuovo elemento dell'array items
//         items[itemActive].classList.add('active');
        
//         //aggiungo la classe active al nuovo elemento dell'array circle
//         circles[itemActive].classList.add('active');
//     }
// })


