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