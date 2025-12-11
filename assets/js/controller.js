import Pendu from './pendu.js'; 
import {display, displayLetters} from './display_word.js'; 
import {word} from './script.js'; 

console.log('word : ',word); 
let container = document.getElementById('container'); 
let container_word = document.getElementById('container_word');
let container_win = document.getElementById('container_win')
console.log('input : ',input) 
const pendu = new Pendu();
container_word.innerHTML = display(word); 
console.log('display word', display(word));
document.getElementById('tenter').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    pendu.setWord(word);
    pendu.setResponse(input); 
    const draw_word = pendu.draw(); 
    console.log('letters : ',pendu.letters);
    // container_word.innerHTML =  display(pendu.draw().join(""));
    container_word.innerHTML = displayLetters(word, pendu.letters);
    if(pendu.checkWin()){
        container_win.innerHTML = `<h1>Félicitation, tu as trouvé le mot "${word}"</h1>`; 
    }
    console.log(pendu.draw() == word); 

})
