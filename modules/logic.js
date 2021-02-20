import words from "./data.js"
import domManipulation from "./interface.js"

export default {
    selectedWord: "",
    selectedTip: "",
    wordSelector: function() {
        let arrayLength = words.length
        let randomIndex = Math.floor(Math.random() * arrayLength )
        this.selectedWord = words[randomIndex].word
        this.selectedTip = words[randomIndex].tip
    },
} 