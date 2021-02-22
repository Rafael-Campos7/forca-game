import gameEngine from "./modules/gamelogic.js"
import domManipulation from "./modules/interface.js"

function onStarted() {
    gameEngine.onStartedActions()
}

function onTryed() {
    gameEngine.onTryedActions()
}

function onAnswered() {
    gameEngine.onAnsweredActions()
}

function restart() {
    location.reload()
}

window.addEventListener("load", onStarted)
domManipulation.tryBtn.addEventListener("click", onTryed)
domManipulation.answerBtn.addEventListener("click", onAnswered)
domManipulation.againBtn.addEventListener("click", restart)