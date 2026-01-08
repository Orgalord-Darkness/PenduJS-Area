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

export const getDifficultyTry = (level) => {
    let nb_try = 0; 
    switch(level){
        case 'facile': 
            nb_try = 8;
            break;
        
        case 'moyen': 
            nb_try = 5;
            break ;
        
        case 'difficile':
            nb_try = 3; 
            break;
        default: 
            nb_try = 8; 
    }
    return nb_try; 
}