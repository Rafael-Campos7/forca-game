import gameEngine from "./logic.js"

gameEngine.wordSelector()

let interfaceEngine = {
    wordGenerator: function() {
        for (let index in gameEngine.selectedWord) {
            let divElement = document.createElement("div")
            divElement.id = "letter" + index
            divElement.className = "letter"
            divElement.innerHTML = gameEngine.selectedWord[index]
            document.getElementById("letterCont").appendChild(divElement)
        }
    },
}
document.getElementById("info-game").innerHTML = gameEngine.selectedWord
interfaceEngine.wordGenerator()