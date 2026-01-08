import {words} from './list.js';

const randomInt = max => Math.floor(Math.random() * max)
const container = document.querySelector('.container');
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