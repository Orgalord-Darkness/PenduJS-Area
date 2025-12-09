import {words} from './list.js';

const randomInt = max => Math.floor(Math.random() * max)
const container = document.querySelectorAll('container');
function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n]; 
}
const word = randWord(words); 

const penduDisplay = (word) => {
    const strings = [];  
    strings.push(`<div style="display:flex">`); 
    for(let i = 0; i <word.length ; i++){
        strings.push(`<p style="flex-direction: column">_&nbsp;</p>`); 
    }
    strings.push(`</div>`);
    return strings.join(" "); 
}

function display(value){
    const container = document.querySelector('.container');
    const show = `<br>
    <h1>Insérer une valeur</h1>
    ${penduDisplay(word)}
    <input type='text' id='response' value='${value}'/>
    <button id='valider'>Valider</button>`; 
    container.innerHTML += show;
}

function pendu(word, response){
    const results = [];
    for(let i = 0; i < response.length ; i++){
        let verif = false; 
        for(let j = 0; i < word.length ; i++){
            if(response[i] === word[j]){
                verif = true; 
                results.push(response[i])
            }
        }
        if(verif === false){
            results.push(null);
        }
    }
    return results; 
}

function placeholder(valeur){
    let retour = '';
    for(let i = 0; i < valeur.length ; i++){
        if(valeur[i] === null){
            retour += '_'; 
        }else{
            retour += valeur[i]; 
        }
    }
    return retour; 
}
console.log('here');
document.getElementById('jouer').addEventListener('click',() =>{
    display(''); 

    document.getElementById('valider').addEventListener('click', () => {
        const input = document.getElementById('response').value;
        console.log(input);
              
    });
})