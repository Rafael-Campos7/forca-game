import words from "./data.js"

let gameEngine = {
    //Seleciona as palavras de forma aleatória
    wordSelector: function() {
        let arrayLength = words.length
        let randomIndex = Math.floor(Math.random() * arrayLength )
        return words[randomIndex]
    }
}

document.getElementById("info-game").innerHTML = gameEngine.wordSelector().word