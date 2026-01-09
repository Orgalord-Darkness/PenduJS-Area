import Pendu from './pendu.js'; 
import {display, displayLetters, checkDisplay} from './display_word.js'; 
import {getDifficulty, getDifficultyTry} from './difficulty.js';
import {penduAscii} from './ascii.js';
import {words} from './list.js';
import {selectWord, selectNbTries} from './script.js';

const pendu = new Pendu();

let container_word = document.getElementById('container_word');
let container_win = document.getElementById('container_win');
let container_fail = document.getElementById('container_fail');
let container_try = document.getElementById('container_try');
let container_history = document.getElementById('container_history');
let level = '';

document.getElementById('start').addEventListener('click', () => { 
    pendu.resetTry();
    container_word.innerHTML = ''; 
    container_win.innerHTML = '';
    container_fail.innerHTML = ''; 
    container_history.innerHTML = ''; 
    level = document.getElementById('difficulte_input').value; 
    const word = selectWord(level);
    pendu.setWord(word);  
    container_word.innerHTML = display(word);

}); 

document.getElementById('tenter').addEventListener('click', () => {
    
    container_win.innerHTML = ''; 
    const word = pendu.getWord(); 
    const input = document.getElementById('input').value;
    const nb_tries = selectNbTries(level);
    let is_success = false; 

    if (input.length <= word.length){
        
        pendu.setResponse(input); 
        pendu.setLevel(nb_tries);

        if (pendu.getTriesLength() < pendu.getLevel()){
            const checkHistory = pendu.checkHistory(input);  
            pendu.draw();
            container_word.innerHTML = displayLetters(word, pendu.letters);
            pendu.checkLetter(word,input); 
            is_success = checkDisplay(word, input, is_success);   
             
            if (pendu.checkWin() === true){
               
                pendu.setCompteur(); 
                container_win.innerHTML = `<p>Félicitation, tu as trouvé le mot "${word}"</p>`; 
            
            } else if (!is_success && !checkHistory){
                
                container_fail.innerHTML = `<pre> ${penduAscii[pendu.getNbTries()]} </pre>`     
                pendu.tryFail(); 
                container_history.innerHTML = `<p> ${pendu.getWordHistory().join(" ; ")} </p>`
            
            } 
            container_try.innerHTML = `<p>Tentatives : ${pendu.getNbTries()} / ${nb_tries}</p>`
        } else {
            container_fail.innerHTML = `<pre> ${penduAscii[pendu.getNbTries()]} </pre>`
            container_win.innerHTML = `<p>Perdu le mot était "${word}"</p>`;
            container_try.innerHTML = ``
        
        }
    }else{
        
        container_win.innerHTML = "<h1>Erreur : Vous n'avez pas le droit de mettre dans la réponse plus de lettre qu'il n'y a dans le mot</h1>";
    
    }

})
document.getElementById('affichage_compteur').addEventListener('click', () =>{
    
    pendu.getCompteur(); 

})