import gameEngine from "./modules/logic.js"
import domManipulation from "./modules/interface.js"

function onStarted() {
    gameEngine.wordSelector()
    domManipulation.addTip(gameEngine.selectedTip)
    gameEngine.gameInstructions(1)
    domManipulation.displaysWord()
}

function onTryed() {
    
}

function onAnswered() {

}

document.onload = onStarted()
