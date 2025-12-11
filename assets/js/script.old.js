// import {words} from "./list.js";

// const randomInt = max => Math.floor(Math.random()*max); 
// function randWord(tabs){
//     const count = tabs.length;
//     const n = randomInt(count);
//     return tabs[n]; 
// }


// // const method = () => {
// //     new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(randWord(words)); 
// //             console.log(randWord(words))
// //         },2000)
// //     })
// // }; 
// // method();

// // const pendu = () => {
// //     const randomWord = randWord(); 
// //     console.log('Choisissez la difficulté : ');     
// // }
// // pendu(); 
// const word = randWord(words); 

// function lire() {
//     const valeur = document.getElementById("champ").value;
//     console.log(valeur);
// }


// const pendu = (word) => {
//     const strings = [];  
//     strings.push(`<div style="display:flex">`); 
//     for(let i = 0; i <word.length ; i++){
//         strings.push(`<p style="flex-direction: column">_&nbsp;</p>`); 
//     }
//     strings.push(`</div>`);
//     return strings.join(" "); 
// }

// const penduInput = () => {
//     const strings = []; 
//     for(let i = 0; i <word.length ; i++){
//         strings.push(`_&nbsp;`); 
//     }
//     return strings.join(" "); 
// }
// const placeholderBase = () => {
//     return `<input type='text' id='input' value='${penduInput()}'>`
// }; 
// const placeholder = (value) => {
//     return `<input type='text' id='input' value='${value}'>`
// }; 
// const container = document.querySelector('.container');

// function penduGame(niveau) {
//     let compteur; 
//     let n; 
//     if(niveau === 'facile'){
//         n = 10; 
//     }if(niveau === 'moyen'){
//         n = 6; 
//     }if(niveau === 'difficile'){
//         n = 3; 
//     }
//     compteur = n;

//     container.innerHTML += (`<h1>Vous avez ${compteur} tentative</h1>`); 
//     container.innerHTML += pendu(word);
//     container.innerHTML += "<button id='valider'>Valider</button>"; 
//     let good = false;
//     do{
//         document.getElementById('valider').addEventListener('click',() => {
//             let result = '';  
//             console.log('valider');
//             const input = document.querySelectorAll('container input'); 
//             const tab_word = [word];
//             const responses = [input]; 
//             responses.map((letter) => {
//                 for(let i; i < tab_word.length ; i++){
//                     if(letter === tab_word[i]){
//                         result+= letter;
//                         good = true; 
//                     }else{
//                         result+= '&nbsp'; 
//                     }
//                 }                       
//             })
//             container.innerHTML += placeholder(result);    
//         });
//         console.log('input');  
//         compteur = compteur - 1; 
//     }while(compteur > 0);
//     container.innerHTML += placeholder(penduInput());
     
    
// }

// // container.innerHTML += pendu(word);
// // container.innerHTML += placeholder();

// console.log('test')

// document.getElementById('jouer').addEventListener('click',() => {
//     penduGame('facile'), 
//     console.log('ici')
// });