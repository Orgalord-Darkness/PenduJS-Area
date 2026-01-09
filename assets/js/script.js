import {words} from './list.js';
import {difficultyLevel} from './difficulty.js'; 

const randomInt = max => Math.floor(Math.random() * max)
export function randWordDifficult(tabs, minLength){
    do {
        const count = tabs.length;
        const n = randomInt(count);
        let word = tabs[n]; 
    }while(word.length < minLength); 

    return word; 
    
}
export function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n];
    
}
export const word = randWord(words); 


export const selectWord  = (level) => {
    if (!difficultyLevel[level]) {
        return false;
    }
    let word_choices = ''; 
    let compteur_boucle = 0;
    do{
            word_choices = randWord(words); 
            compteur_boucle++
    }while(compteur_boucle < 100 && (word_choices.length <= difficultyLevel[level].minLength || word_choices.length >= difficultyLevel[level].maxLength)); 
    return word_choices; 
};

export const selectNbTries  = (level) => {
    const select_nb_tries =  difficultyLevel[level].nb_try;
    return select_nb_tries; 
};