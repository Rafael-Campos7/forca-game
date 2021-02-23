export default {
    cont: 8,
    boxWrongLetters: document.getElementById("wrong-letters"),
    boxGameInfo: document.getElementById("info-game"),
    boxTip: document.getElementById("tip"),
    againBtn: document.getElementById("againBtn"),
    tryImg: document.getElementById("try-image"),
    tryBtn: document.getElementById("try-btn"),
    answerBtn: document.getElementById("answer-btn"),
    inputLetter: document.getElementById("letter-input"),
    setWord: function(selectedWord) {
        for (let index in selectedWord) {
            let spanElement = document.createElement("span")
            let divElement = document.createElement("div")
            divElement.className = "letter"
            spanElement.id = "letter" + index
            spanElement.className = "spanLetter"
            divElement.appendChild(spanElement)
            spanElement.innerHTML = selectedWord[index]
            document.getElementById("letterCont").appendChild(divElement)
        }
    },
    reactPage: function() {
        document.body.style.backgroundImage = "linear-gradient(to top, rgba(55, 98, 172, 0." + this.cont + "99) 0%, rgba(156, 230, 255, 0." + this.cont  + "99) 100%)"
        --this.cont
    },
    endGame: function(word, winOrOver) {
        for(let index in word) {
            this.setLetter(index)
        }
        switch(winOrOver) {
            case 0:
                document.body.style.backgroundImage = "linear-gradient(to top, rgba(55, 98, 172, 0.399) 0%, rgba(156, 230, 255, 0.399) 100%)"
                break
            case 1:
                document.body.style.backgroundImage = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
        }
        this.inputLetter.style.display = "none"
        this.tryBtn.style.display = "none"
        this.answerBtn.style.display = "none"
        this.againBtn.style.display = "block"
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