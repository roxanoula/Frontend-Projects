let cards = []
let currentSum = 0
let status = {
    isAlive: true,
    isWinner: false
}

const cardsEl   = document.getElementById("cards-el")
const sumEl     = document.getElementById("sum-el")
const messageEl = document.getElementById("message-el")
const newCardBtn = document.getElementById("newCard-btn")

function generateCard() {
    return Math.floor(Math.random()*13)+1
}

function startGame() {
    /*
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
    */
   
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: 0"

    const firstCard = generateCard()
    const secondCard = generateCard()
    currentSum = firstCard + secondCard

    cardsEl.textContent += " " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + currentSum
    cards = [firstCard, secondCard]

    const status = checkGameStatus()
    let message = "Want to play a round?"

    if (status.isAlive) console.log( "Keep playing" )
    else if (status.isWinner) {
        message = "You have a Blackjack !"
        newCardBtn.disabled = true
    }
    else {
        message = "Game Over !"
        newCardBtn.disabled = true
    }

    messageEl.textContent = message
}

function checkGameStatus() {   
    console.log(currentSum)
    if (currentSum > 21) {
        status.isAlive = false
        status.isWinner=false
    }
    else if (currentSum === 21) {
        status.isAlive = false
        status.isWinner=true
    }
    else {
        status.isAlive = true
        status.isWinner=false
    }
    
    return status
}

function newCard() {
    const newCard = generateCard()
    cards.push(newCard)
    cardsEl.textContent += " " + newCard
    currentSum += newCard
    sumEl.textContent = "Sum: " + currentSum
    checkGameStatus
}