export const display = (word) => {
    return "<br>"+"_ ".repeat(word.length).trim();
}

export const displayLetters = (word, letters) =>{
    return word.split("").map((letter) => {
        if(letters.includes(letter)){
            return letter
        }
        return ' _'; 
    }).join("")
}

export const checkDisplay = (word, l) => {
    word.split("").forEach((letter) => {
        if(l === letter){
            tentative = true; 
        }
    });
};