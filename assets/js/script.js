import {words} from "./list.js";

const randomInt = max => Math.floor(Math.random()*max); 
function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n]; 
}


// const method = () => {
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(randWord(words)); 
//             console.log(randWord(words))
//         },2000)
//     })
// }; 
// method();

// const pendu = () => {
//     const randomWord = randWord(); 
//     console.log('Choisissez la difficulté : ');     
// }
// pendu(); 

function lire() {
    const valeur = document.getElementById("champ").value;
    console.log(valeur);
}

const pendu = () => {
    const strings = []; 
    const word = randWord(words); 
    strings.push(`<div style="display:flex">`); 
    for(let i = 0; i <word.length ; i++){
        strings.push(`<p style="flex-direction: column">_&nbsp;</p>`); 
    }
    strings.push(`</div>`);
    return strings.join(""); 
}
pendu(); 

const penduInput = () => {
    const strings = []; 
    const word = randWord(words);  
    for(let i = 0; i <word.length ; i++){
        strings.push(`_&nbsp;`); 
    }
    return strings.join(""); 
}
const placeholder = () => {
    return `<input type='text' value='${penduInput()}'>`
}; 
placeholder();

const container = document.querySelector('.container');
container.innerHTML += pendu();
container.innerHTML += placeholder();

console.log('test')