import {words} from './list.js';

const randomInt = max => Math.floor(Math.random() * max)
const container = document.querySelector('.container');
function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n]; 
}
const word = randWord(words); 

const penduDisplay = (word, tab) => {
    const strings = [];  
    strings.push(`<div style="display:flex">`); 
    if(tab){
        for(let i = 0 ; i < tab.length; i++){
            if(tab[i] === null){
                strings.push(`<p style="flex-direction: column">_&nbsp;</p>`);     
            }else{
                strings.push(`<p style="flex-direction: column">${tab[0]}</p>`); 
            }   
        }    
    }
    for(let i = 0; i < word.length; i++){
        strings.push(`<p style="flex-direction: column">_&nbsp;</p>`); 
    }
    
    strings.push(`</div>`);
    return strings.join(""); 
}
const advancements = [];
const displayAdvancement = (tab) =>{ 
    const strings = []; 
    strings.push(`<div style='display:flex'>`);
    console.log('displaydvancement : ',tab, '|', tab.length === 0)
    if(tab.length <= 0){
        for(let i = 0; i < tab.length; i++){
            strings.push(`<p style="flex-direction: column">_&nbsp;</p>`); 
        }       
    }else{
        for(let i = 0 ; i < word.length; i++){
            console.log('display advancement comparaison :',  word[i], '===',tab[i])
            if(tab[i] === null|| tab[i] === undefined || tab[i] === 'none'){
                strings.push(`<p style="flex-direction: column">_&nbsp;</p>`);     
            }else{
                strings.push(`<p style="flex-direction: column">${tab[i]}</p>`);
                advancements[i] = tab[i];  
            }   
        }
    }
    strings.push(`</div>`);
    const final = [
        ...strings,
        ...advancements, 
    ]
    return final.join(""); 
}

function pendu(word, response){
    const results = [] 
    let win = false; 
    for(let i = 0; i < word.length ; i++){
        let verif = false; 
        for(let j = 0; j < response.length ; j++){
            if(response[j] === word[i]){
                verif = true; 
                results[i] = response[j]; 
                console.log('response : ',response[j] ,word[i])
                break; 
            }
        }
        if(verif === false){
            results[i] = 'none'; 
        }
    }
    console.log('result tab : ',results);
    console.log('result join', results.join("")); 
    console.log('result comparaison',results.join("") === word); 
    if(results.join("") === word){
        win = true;
        console.log('win', win); 
        console.log(results.join(""))
        const show = `<h1>Félicitation tu as gagné le mot était ${word}.</h1>` 
        container.innerHTML += show; 
    }
    return results; 
}

function display(value, response){
    // const container = document.querySelector('.container');
    const show = `<br>
    <h1>Insérer une valeur</h1>
    ${displayAdvancement(response)}
    <input type='text' id='response' value='${value}'/>
    <button id='valider'>Valider</button>`; 
    // const show = `${displayAdvancement(response)}`; 
    container.innerHTML = show;
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
    display('', []);
    attachValiderListener();
})

function attachValiderListener() {
    document.getElementById('valider').addEventListener('click', () => {
        const input = document.getElementById('response').value;
        const pendugame = pendu(word, input);
        display('', pendugame);      
        attachValiderListener();
    });
}