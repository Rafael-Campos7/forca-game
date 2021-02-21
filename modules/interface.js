import gameEngine from "./logic.js"

export default {
    boxWrongLetters: document.getElementById("wrong-letters"),
    boxGameInfo: document.getElementById("info-game"),
    boxTip: document.getElementById("tip"),
    tryImg: document.getElementById("try-image"),
    tryBtn: document.getElementById("try-btn"),
    answerBtn: document.getElementById("answer-btn"),
    letterInput: document.getElementById("letter-input"),
    displaysWord: function() {
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
        this.boxTip.innerHTML = tip
    },
    addWrongLetters: function(letter) {
        this.boxWrongLetters.innerHTML = letter 
    },
    addGameInfo: function(info) {
        this.boxGameInfo.innerHTML = info
    },
    showLetter: function(letter) {
        letter.style.visibility = "visible"
    },
    changeImg: function(imgSrc) {
        this.tryImg.src = imgSrc
    },
}