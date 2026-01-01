export default class Pendu{
    word = ""; 
    response = ""; 
    level = ""; 
    nb_try = null; 
    word_length = null; 
    tries = [1]; 
    compteur = parseInt(localStorage.getItem("compteur")) || 0; 
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

    setLevel(level){
        this.level = level; 
    }

    getCompteur(){
        document.getElementById("compteur").textContent = this.compteur;
    }

    setCompteur(){
        this.compteur++ ; 
    }

    save(letter){
        if (!this.letters.includes(letter)) {
            this.letters.push(letter);
        }

    }   
    tryFail(){
        this.tries.push(1);
    }   

    draw(){ 
        return this.word.split("").map((letter) => { 
            if(this.response.includes(letter)){
                this.save(letter);
                return letter
            }
            this.save(' _ ')
            return ' _'; 
        }).join("");
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

    checkLevel(){
        return this.tries.length >= level; 
    }

    getLevel(){
        return this.level; 
    }

    getTries(){
        return this.tries.length; 
    }

    getLetters(){
        return this.letters; 
    }
}