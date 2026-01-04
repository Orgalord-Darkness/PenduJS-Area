import {randWord} from './script.js'; 
import {words} from './list.js';

export const getDifficulty = (level) => {
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
    return word; 
}