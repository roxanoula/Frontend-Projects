//import { width, layout } from './configs.js'
const layout = [
    1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]
const width = 28
const bordSize = width * width
const keyDown = 40
const keyUp = 38
const keyLeft = 37
const keyRight = 39
const moveUp = -width
const moveDown = +width
const moveLeft = -1
const moveRigh = +1
const ghostTimeout = 10000
const maxTableSize = 20

let pacmanIndex = 490
let minScore = 0

const ghostsStart = {
    name: ['blinky', 'pinky', 'inky', 'clyde'],
    index: [348, 403, 351, 408],
    speed: [250, 400, 300, 500]
}

class Ghost {
    constructor(name, startIndex, speed) {
        this.name = name
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}
function createGhosts(ghostStart) {

    if (!squares || !squares.length) return;
    
    let newGhosts = []
    
    for (let i=0; i<ghostsStart.name.length; i++) {
        newGhosts.push(new Ghost(ghostsStart.name[i], ghostsStart.index[i], ghostsStart.speed[i]))
        addClassToSquare(ghostsStart.name[i], ghostsStart.index[i])
        addClassToSquare('ghost', ghostsStart.index[i])
    }

    return newGhosts
}

let squares = []
let ghosts = []
let score = 0

const grid         = document.getElementsByClassName('grid')
const scoreDisplay = document.getElementById('score')
const startBtn     = document.getElementById('startBtn')
const topScoresTable = document.getElementById("historical-scores");

const removeClassFromSquare = (classname, idx, board = squares) => { board[idx].classList.remove(classname) }
const addClassToSquare = (classname, idx, board = squares) => { board[idx].classList.add(classname) }

function createBoard() {
    for (let idx=0; idx<layout.length; idx++) {
        const square = document.createElement('div')
        grid[0].appendChild(square)
        squares.push(square)

        switch(layout[idx]) {
            case 0: {
                addClassToSquare('pac-dot', idx)
                break;
            }
            case 1: {
                addClassToSquare('wall', idx, squares)
                break;
            }
            case 2: {
                addClassToSquare('ghost-lair', idx, squares)
                break;
            }
            case 3: {
                addClassToSquare('power-pellet', idx, squares)
                break;
            }
            case 4: {
                addClassToSquare('empty', idx, squares)
                break;
            }
        }    
    }
}

function clearBoard() {
   
    removeClassFromSquare('pacman', pacmanIndex)

    ghosts.forEach(ghost => {
        clearInterval(ghost.timerId)
        removeClassFromSquare(ghost.name, ghost.currentIndex);
        removeClassFromSquare('ghost', ghost.currentIndex);
        removeClassFromSquare('scared-ghost', ghost.currentIndex)
    })

    ghosts = []
        
}

function controlMove(e) {
    removeClassFromSquare('pacman', pacmanIndex)
    switch(e.keyCode) {
        case keyDown: 
            if (!squareContains('ghost-lair', pacmanIndex+width) &&
                !squareContains('wall', pacmanIndex+width) && pacmanIndex + width < bordSize)
                pacmanIndex += width;
            if (pacmanIndex + width >= bordSize && !squareContains('wall',pacmanIndex-width*(width-1)))
                pacmanIndex = pacmanIndex-width*(width-1)
            break;
        case keyUp: 
            if (!squareContains('ghost-lair', pacmanIndex-width) &&
                !squareContains('wall', pacmanIndex-width) && pacmanIndex - width > 0) 
                pacmanIndex -= width;
            if (pacmanIndex - width <= 0 && !squareContains('wall',pacmanIndex+width*(width-1)))
                pacmanIndex = pacmanIndex + width*(width-1)
            break;
        case keyLeft: 
            if (!squareContains('ghost-lair', pacmanIndex-1) &&
                !squareContains('wall', pacmanIndex-1) &&
                pacmanIndex % width !== 0) pacmanIndex -=1;
            if (pacmanIndex%width === 0 && !squareContains('wall', pacmanIndex+width-1))
                pacmanIndex = pacmanIndex+width-1
            break;
        case keyRight: 
            if (!squareContains('ghost-lair', pacmanIndex+1) &&
                !squareContains('wall', pacmanIndex+1) && pacmanIndex % width < width -1) 
                pacmanIndex += 1;
            if (pacmanIndex % width === width -1 && !squareContains('wall', pacmanIndex-width+1))
                pacmanIndex = pacmanIndex-width+1
            break;
    }
    eatPacDot(pacmanIndex);
    eatPellet(pacmanIndex);
    squares[pacmanIndex].classList.add('pacman')
}

function eatPacDot(idx) {
    if (squareContains('pac-dot', idx)){
        score++;
        scoreDisplay.innerHTML = score;
        squares[idx].classList.remove('pac-dot')
    }
}

function eatPellet(idx) {
    if (squareContains('power-pellet', idx)) {
        score += 10
        scoreDisplay.innerHTML = score;
        removeClassFromSquare('power-pellet', idx)
        ghosts.forEach(ghost => ghost.isScared = true)

        setTimeout(unscareGhosts, ghostTimeout)
    }
}

function unscareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

function squareContains(symbol, squareIdx) {
    if (squares[squareIdx].classList.contains(symbol)) return true;
    else return false;
}

function moveGhost(ghostObj) {
    let direction = getNextDirection()

    ghostObj.timerId = setInterval(function() {
        let nextIdx = ghostObj.currentIndex + direction
        if (!squareContains('ghost', nextIdx) && !squareContains('wall', nextIdx)) {
            removeClassFromSquare(ghostObj.name, ghostObj.currentIndex)
            removeClassFromSquare('ghost', ghostObj.currentIndex)
            removeClassFromSquare('scared-ghost', ghostObj.currentIndex)
            addClassToSquare(ghostObj.name, nextIdx )
            addClassToSquare('ghost', nextIdx)
            ghostObj.currentIndex = nextIdx
        }
        else direction = getNextDirection()

        if (ghostObj.isScared) {
            squares[ghostObj.currentIndex].classList.add('scared-ghost')
            if (squareContains('pacman', ghostObj.currentIndex)) {
                removeClassFromSquare('ghost', ghostObj.currentIndex)
                removeClassFromSquare(ghostObj.name, ghostObj.currentIndex)
                removeClassFromSquare('scared-ghost', ghostObj.currentIndex)

                ghostObj.currentIndex = ghostObj.startIndex
                score +=100
                scoreDisplay.innerHTML = score;

                addClassToSquare(ghostObj.name, ghostObj.currentIndex)
                addClassToSquare('ghost', ghostObj.currentIndex)
            }
        }
        checkGameStatus()
    }, ghostObj.speed)
}

function getNextDirection() {
    const directions = [moveLeft, moveRigh, moveUp, moveDown]
    let direction = directions[Math.floor(Math.random()*directions.length)]

    return direction
}

function checkGameStatus() {
    if (squareContains('ghost', pacmanIndex) && !ghosts[0].isScared) {
        stopGame(false);
        return
    }

    for (let idx = 0; idx < squares.length; idx++) 
        if (squareContains('pac-dot', idx)) return;

    stopGame(true);

}

function stopGame(success) {
    if (success) message = " ==> Your belly is full. Congratulation !"
    else message = " ==> Game Over !"

    ghosts.forEach (ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', controlMove)
    scoreDisplay.innerHTML = score + message

    createHistoricalEntry()
}

function restartGame() {
    if (squares && squares.length) clearBoard()
    
    createBoard()
    ghosts = createGhosts(ghostsStart)
    
    ghosts.forEach(ghost => moveGhost(ghost))
    scoreDisplay.innerHTML = "0"

    minScore = 0;
    score = 0;
    pacmanIndex = 490
    addClassToSquare('pacman', pacmanIndex)
}

function checkWin() {
    for (let idx = 0; idx < squares.length; idx++)
        if (squareContains('pac-dot')) return false;
    return true;
}

function createHistoricalEntry() {
    var tableSize = topScoresTable.rows.length;
    if (tableSize == maxTableSize+1) {
        if (score <  computeMinScore()) return;
        for (let idx=tableSize-1; idx > 1; idx--) {
            var currentScore = parseInt(topScoresTable.rows[idx].cells[1].innerHTML)
            if (currentScore === minScore) {
                topScoresTable.deleteRow(idx);
                minScore = computeMinScore();
                break;
            }
        }
    }

    var row = topScoresTable.insertRow(1);
    var dateCell = row.insertCell(0);
    var scoreCell = row.insertCell(1);
    let currentDateAndTime = new Date().toLocaleString();
    dateCell.innerHTML = currentDateAndTime;
    scoreCell.innerHTML = score;  
}

function computeMinScore() {
    if (topScoresTable.rows.length == 1) return minScore;

    var min = parseInt(topScoresTable.rows[1].cells[1].innerHTML);
    for (let idx=2; idx < topScoresTable.rows.length; idx++) {
        var rowScore = parseInt(topScoresTable.rows[idx].cells[1].innerHTML)
        if (rowScore < min) {
                min = rowScore
            }
    }

    return min
}

restartGame()

document.addEventListener('keyup', controlMove)
startBtn.addEventListener('click', restartGame)