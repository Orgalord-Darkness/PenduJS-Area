import {words} from "./list.js";

const randomInt = max => Math.ceil(Math.random()*max); 

function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n]; 
}

const method = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(randWord(words)); 
            console.log(randWord(words))
        },2000)
    })
}; 
method();

fetch('https://www.youtube.com/watch?v=_m3NVEP3dfY').then(function(response) {
    return console.log(response.blob());
})

const pendu = () => {
    const randomWord = randWord(); 
    console.log('Choisissez la difficulté : ');     
}
pendu(); 

function lire() {
    const valeur = document.getElementById("champ").value;
    console.log(valeur);
}