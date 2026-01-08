export default class Pendu{
    
    word = ""; 
    response = ""; 
    level = ""; 
    nb_try = 0; 
    word_length = null; 
    tries = [1]; 
    compteur = parseInt(localStorage.getItem("compteur")) || 0; 
    word_history = [];

    getWord(){
        return this.word; 
    }
    
    setWord(word){
        this.word = word; 
    }
    
    letters = Array.from(this.word.length).fill("_");
    
    setResponse(response){
        this.response = response; 
    }

    setLevel(level){
        this.level = level; 
    }

    getCompteur(){
        document.getElementById("compteur").textContent = `${this.compteur} partie(s) gagnées`;
    }

    setCompteur(){
        this.compteur++ ; 
    }

    getWordHistory(){
        return this.word_history; 
    }

    setWordHistory(word){
        this.word_history.push(word); 
    }

    save(letter){

        if (!this.letters.includes(letter)) {
            this.letters.push(letter);
        }

    }
    
    getTries(){
        return this.tries; 
    }

    getNbTries(){
        return this.nb_try; 
    }
    
    tryFail(){

        this.tries.push(1);
        this.nb_try++
    
    }
    
    resetTry(){
        
        this.tries = [1];
        this.letters = Array.from(this.word.length).fill("_");
        this.nb_try = 0;
        this.word_history = [];   
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

    checkLetter = (word, l) => { 
        
        let find = false;
        let find_history = false;   
        
        word.split("").forEach((letter) => {
            if (l === letter){
                find = true; 
            }
        });
        
        this.getWordHistory().forEach((letter) => {
            if(l === letter){
                find_history = true; 
            }
        }); 
        
        if (!find && !find_history){
            this.setWordHistory(l);
        } 
    };

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

    checkHistory(l){
        
        const input = l.split("");
        let check = false; 
        
        if (this.word_history.length === 0){
            return false; 
        }
        
        this.word_history.forEach((letter) => {
            
            if (letter === input[0]){
                
                check = true;
                return check ;   
            
            }
        
        }); 
         
        return check; 
    }

    getLevel(){
        return this.level; 
    }

    getTriesLength(){
        return this.tries.length; 
    }

    getLetters(){
        return this.letters; 
    }
}