export default class Pendu{
    word = ""; 
    response = ""; 
    // constructor(word, response){
    //     this.word = word; 
    //     this.response = response; 
    // } 
    setWord(word){
        this.word = word; 
    }
    letters = Array.from(this.word.length).fill("_");; 
    setResponse(response){
        this.response = response; 
    }
    save(letter){
        if (!this.letters.includes(letter)) {
            this.letters.push(letter);
        }

    }   

    draw(){
        return this.word.split("").map((letter) => {
            if(this.response.includes(letter)){
                this.save(letter);
                return letter
            }
            this.save(' _ ')
            return ' _'; 
        }).join("")
    }

    checkWin(){
        let compteur = true; 
        this.word.split("").map((letter) => {
            if(!this.letters.includes(letter)){
                compteur = false; 
            }
        })
        return compteur; 

    }

    getLetters(){
        return this.letters; 
    }
}