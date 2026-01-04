import Pendu from './pendu.js'; 
import {display, displayLetters, checkDisplay} from './display_word.js'; 
import {getDifficulty} from './difficulty.js';

const pendu = new Pendu();
let container_word = document.getElementById('container_word');
let container_win = document.getElementById('container_win');
let container_fail = document.getElementById('container_fail');

document.getElementById('start').addEventListener('click', () => {
    pendu.resetTry();
    container_word.innerHTML = ''; 
    container_win.innerHTML = '';
    container_fail.innerHTML = ''; 
    const level = document.getElementById('difficulte_input').value; 
    const word = getDifficulty(level);
    pendu.setWord(word);  
    container_word.innerHTML = display(word);  
})
document.getElementById('tenter').addEventListener('click', () => {
    const word = pendu.getWord(); 
    const input = document.getElementById('input').value;
    const level = 8; 
    let tentative = false; 
    if(input.length <= word.length){
        pendu.setWord(word);
        pendu.setResponse(input); 
        pendu.setLevel(level);
        let tries = pendu.getNbTries();
        if(pendu.getTriesLength() < pendu.getLevel()){
            pendu.draw();
            container_word.innerHTML = displayLetters(word, pendu.letters); 
            checkDisplay(word, input); 
            if(pendu.checkWin() === true){
                pendu.setCompteur(); 
                container_win.innerHTML = `<h1>Félicitation, tu as trouvé le mot "${word}"</h1>`; 
            }else if(tentative !== true){
                container_fail.innerHTML += ` | `;
                pendu.tryFail(); 
            } 
        }else{
            container_win.innerHTML += "<h1>Perdu</h1>";
        }
    }else{
        container_win.innerHTML += "<h1>Erreur : Vous n'avez pas le droit de mettre dans la réponse plus de lettre qu'il n'y a dans le mot</h1>";
    }
})
document.getElementById('affichage_compteur').addEventListener('click', () =>{
    pendu.getCompteur(); 
})