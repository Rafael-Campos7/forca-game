export default {
    boxWrongLetters: document.getElementById("wrong-letters"),
    boxGameInfo: document.getElementById("info-game"),
    boxTip: document.getElementById("tip"),
    tryImg: document.getElementById("try-image"),
    tryBtn: document.getElementById("try-btn"),
    answerBtn: document.getElementById("answer-btn"),
    inputLetter: document.getElementById("letter-input"),
    displaysWord: function(selectedWord) {
        for (let index in selectedWord) {
            let spanElement = document.createElement("span")
            let divElement = document.createElement("div")
            divElement.className = "letter"
            spanElement.id = "letter" + index
            divElement.appendChild(spanElement)
            spanElement.innerHTML = selectedWord[index]
            document.getElementById("letterCont").appendChild(divElement)
        }
    },
    setTip: function(tip) {
        this.boxTip.innerHTML = tip
    },
    setWrongLetters: function(letter) {
        this.boxWrongLetters.innerHTML = letter 
    },
    setGameInfo: function(info) {
        this.boxGameInfo.innerHTML = info
    },
    setLetter: function(id) {
        document.getElementById("letter" + id).style.visibility = "visible"
    },
    changeImg: function(id) {
        this.tryImg.src = "../images/tentativa" + id + ".png"
    },
}