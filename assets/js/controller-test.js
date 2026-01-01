import Pendu from './pendu.js'; 
import {display, displayLetters} from './display_word.js'; 
import {word} from './script.js'; 

console.log('word : ',word); 
let container_word = document.getElementById('container_word');
let container_win = document.getElementById('container_win')
console.log('input : ',input) 
const pendu = new Pendu();
container_word.innerHTML = display(word); 
console.log('display word', display(word));
console.log('word : ',word); 
document.getElementById('tenter').addEventListener('click', () => {
    console.log('word : ',word);
    const input = document.getElementById('input').value;
    const level = document.getElementById('level').value; 
    if(input.length <= word.length){
        pendu.setWord(word);
        pendu.setResponse(input); 
        pendu.setLevel(level); 
        console.log('tries' , pendu.getTries(), ' > ', pendu.getLevel()); 
        if(pendu.getTries() < pendu.getLevel()){
            const draw_word = pendu.draw(); 
            console.log('letters : ',pendu.letters);
            // container_word.innerHTML =  display(pendu.draw().join(""));
            container_word.innerHTML = displayLetters(word, pendu.letters);
            pendu.tryFail(); 
            if(pendu.checkWin() === true){
                pendu.setCompteur(); 
                container_win.innerHTML = `<h1>Félicitation, tu as trouvé le mot "${word}"</h1>`; 
            }
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
