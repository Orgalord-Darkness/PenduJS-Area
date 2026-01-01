import Pendu from './pendu.js'; 
import {display, displayLetters} from './display_word.js'; 
import {randWord} from './script.js'; 
import {words} from './list.js';

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
    console.log('difficulte : ',level); 
    let word = randWord(words);
    switch(level){
        case 'facile': 
            do{
                word = randWord(words);
            }while(word.length > 4)
            break;
        
        case 'moyen': 
            do{
                word = randWord(words);
            }while(word.length < 5 || word.length > 6)
            break;
        
        case 'difficile': 
            do{
                word = randWord(words); 
            }while(word.length < 7)
            break;
        default: 
            word = randWord(words); 
    }
    console.log('word : ', word, 'word.length = ', word.length);
    pendu.setWord(word);  
    container_word.innerHTML = display(word);  
})
document.getElementById('tenter').addEventListener('click', () => {
    // console.log('word : ',word);
    const word = pendu.getWord(); 
    const input = document.getElementById('input').value;
    const level = 8; 
    let tentative = false; 
    if(input.length <= word.length){
        pendu.setWord(word);
        pendu.setResponse(input); 
        pendu.setLevel(level); 
        console.log('tries' , pendu.getTriesLength(), ' > ', pendu.getLevel());
        let tries = pendu.getNbTries(); 
        console.log('nb  tries : ', tries); 
        if(pendu.getTriesLength() < pendu.getLevel()){
            const draw_word = pendu.draw(); 
            console.log('letters : ',pendu.letters);
            // container_word.innerHTML =  display(pendu.draw().join(""));
            let showLetters = displayLetters(word, pendu.letters);
            container_word.innerHTML = displayLetters(word, pendu.letters);
            const check = (l) => {
                word.split("").forEach((letter) => {
                    if(l === letter){
                        tentative = true; 
                    }
                });
            }; 
            check(input); 
            if(pendu.checkWin() === true){
                pendu.setCompteur(); 
                container_win.innerHTML = `<h1>Félicitation, tu as trouvé le mot "${word}"</h1>`; 
            }else if(tentative !== true){
                container_fail.innerHTML += ` | `;
                pendu.tryFail(); 
            }
            
            // if(tentative === true){
            //     if(pendu.checkWin() === true){
            //     pendu.setCompteur(); 
            //     container_win.innerHTML = `<h1>Félicitation, tu as trouvé le mot "${word}"</h1>`; 
            // }
            // }else{
            //     pendu.tryFail(); 
            //     container_fail.innerHTML += ` | `;
            // }
            console.log('tentative', pendu.getTriesLength() ); 
            console.log(pendu.draw() == word);
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
