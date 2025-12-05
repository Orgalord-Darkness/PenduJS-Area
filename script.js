import {words} from "./list.js";

const randomInt = max => Math.ceil(Math.random()*max); 

function randWord(tabs){
    const count = tabs.length;
    const n = randomInt(count);
    return tabs[n]; 
}

const method = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(randWord(words)); 
            console.log(randWord(words))
        },2000)
    })
}; 
method(); 