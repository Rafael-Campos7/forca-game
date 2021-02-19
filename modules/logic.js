import words from "./data.js"

let gameEngine = {
    selectedWord: "",
    selectedTip: "",
    wordSelector: function() {
        let arrayLength = words.length
        let randomIndex = Math.floor(Math.random() * arrayLength )
        this.selectedWord = words[randomIndex].word
        this.selectedTip = words[randomIndex].tip
    },
} 

export default gameEngine