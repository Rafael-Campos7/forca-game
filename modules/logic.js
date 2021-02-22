import words from "./data.js"
import domManipulation from "./interface.js"
import tryValidations from "./validations.js"

export default {
    hits: 0,
    attempts: 1,
    inputAnswer: "",
    inputLetter: "",
    selectedWord: "",
    selectedTip: "",
    wrongLetters: [],
    triedLetters: [],
    inputLength: null,
    alreadyInserted: null,
    letterCheck: [],
    getWord: function() {
        let arrayLength = words.length
        let randomIndex = Math.floor(Math.random() * arrayLength )
        this.selectedWord = words[randomIndex].word
        this.selectedTip = words[randomIndex].tip
    },
    getTryValidations: function() {
        this.inputLetter = domManipulation.inputLetter.value
        this.inputLength = this.inputLetter.length
        this.alreadyInserted = !tryValidations.alreadyInserted(this.inputLetter, this.triedLetters)
        this.letterCheck = tryValidations.letterCheck(this.inputLetter, this.selectedWord)
    },
    rightLetterActions: function() {
        this.triedLetters.push(this.inputLetter)
        domManipulation.setGameInfo(`Esta palavra contém ${this.letterCheck.length - 1} letra(s) ${this.inputLetter.toUpperCase()} </br> Insira outra letra ou responda!`) 
        for (let index in this.letterCheck) {
            if (index > 0) {
                domManipulation.setLetter(this.letterCheck[index])
                this.hits += 1
            }
        }
        domManipulation.inputLetter.value = ""
        domManipulation.inputLetter.focus()
    },
    wrongLetterActions: function() {
        this.triedLetters.push(this.inputLetter)
        this.wrongLetters.push(this.inputLetter)
        domManipulation.setGameInfo("A palavra não possui essa letra. </br> Insira outra letra ou responda!")
        domManipulation.setWrongLetters(this.wrongLetters.join(" ", ","))
        this.attempts += 1
        domManipulation.changeImg(this.attempts) 
        domManipulation.inputLetter.value = ""
        domManipulation.inputLetter.focus()
    },
    onStartedActions: function() {
        this.getWord()
        domManipulation.setTip(this.selectedTip)
        domManipulation.setGameInfo("Insira uma letra ou responda!")
        domManipulation.setWord(this.selectedWord)
        domManipulation.inputLetter.focus()
    },
    onTryedActions: function() {
        this.getTryValidations()
        switch (this.inputLength) {
            case 1:
                    if (this.alreadyInserted) {
                        if (this.letterCheck[[0]]) {
                            this.rightLetterActions()
                        } else {
                            this.wrongLetterActions()
                        }
                    } else {
                        domManipulation.setGameInfo("Você já tentou essa letra")
                        domManipulation.inputLetter.value = ""
                    }
                break
            case 0:
                domManipulation.setGameInfo("Você precisa inserir uma letra")
                break
            default:
                domManipulation.setGameInfo("Tente somente uma letra por vez")        
                domManipulation.inputLetter.value = ""
        }
        this.onFinishedAttempts()
        this.onAllLettersCorrect()
    },
    gameOverActions: function() {
        domManipulation.setGameInfo("Você perdeu")
        domManipulation.endGame(this.selectedWord, 0)
    },
    gameWinActions: function() {
        domManipulation.setGameInfo("Você ganhou")
        domManipulation.endGame(this.selectedWord, 1)
    },
    onAllLettersCorrect: function() {
        if (this.selectedWord.length == this.hits) {
            this.gameWinActions()
        }
    },
    onFinishedAttempts: function() {
        if (this.attempts == 7) {
            this.gameOverActions()
        }
    },
    onAnsweredActions: function() {
        this.inputAnswer = domManipulation.inputLetter.value
        if (this.inputAnswer.length > 0) {
            if (this.inputAnswer == this.selectedWord) {
                this.gameWinActions()
            } else {
                this.gameOverActions()
            }
        } else {
            domManipulation.setGameInfo("Digite uma palavra para responder")
        }
    },
} 