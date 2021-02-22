import gameEngine from "./modules/logic.js"
import domManipulation from "./modules/interface.js"

function onStarted() {
    gameEngine.getWord()
    domManipulation.setTip(gameEngine.selectedTip)
    domManipulation.setGameInfo("Insira uma letra ou responda!")
    domManipulation.displaysWord(gameEngine.selectedWord)
}

function onTryed() {
    gameEngine.onTryActions()
}

function onAnswered() {

}

onStarted()
domManipulation.tryBtn.addEventListener("click", onTryed)