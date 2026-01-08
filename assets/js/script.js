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
    let word_choices = ''; 
    do{
            word_choices = randWord(words); 
    }while(word_choices.length <= difficultyLevel[level].minLength || word_choices.length >= difficultyLevel[level].maxLength); 
    return word_choices; 
};

export const selectNbTries  = (level) => {
    let nb_tries_choices = ''; 
    do{
        nb_tries_choices = randWord(words); 
    }while(nb_tries_choices <= difficultyLevel[level].nb_try); 
    return nb_tries_choices; 
};