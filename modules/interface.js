import gameEngine from "./logic.js"

export default {
    wrongLetters: document.getElementById("wrong-letters"),
    infoGame: document.getElementById("info-game"),
    tip: document.getElementById("tip"),
    tryImg: document.getElementById("try-image"),
    tryBtn: document.getElementById("try-btn"),
    answerBtn: document.getElementById("answer-btn"),
    letterInput: document.getElementById("letter-input"),
    wordGenerator: function() {
        for (let index in gameEngine.selectedWord) {
            let spanElement = document.createElement("span")
            let divElement = document.createElement("div")
            divElement.className = "letter"
            spanElement.id = "letter" + index
            divElement.appendChild(spanElement)
            spanElement.innerHTML = gameEngine.selectedWord[index]
            document.getElementById("letterCont").appendChild(divElement)
        }
    },
    addTip: function(tip) {
        this.tip.innerHTML = tip
    },
    addWrongLetters: function(letter) {
        this.wrongLetters.innerHTML = letter 
    },
    addInfoGame: function(info) {
        this.infoGame.innerHTML = info
    },
    showLetter: function(letter) {
        letter.style.visibility = "visible"
    },
    changeImg: function(imgSrc) {
        this.tryImg.src = imgSrc
    },
}