const minutesContainer = document.getElementById('minutes')
const secondsContainer = document.getElementById('seconds')

const startButton = document.getElementById('start')
const resetButton = document.getElementById('reset')
const stopButton = document.getElementById('stop')

let currentTime = 0
let intervalId

function displayCurrentTime() {
    const seconds = (currentTime % 60).toString().padStart(2, '0')
    const minutes = Math.trunc(currentTime / 60)
        .toString()
        .padStart(2, '0')

    minutesContainer.textContent = minutes
    secondsContainer.textContent = seconds
}

function incrementTime() {
    currentTime++
    displayCurrentTime()
}

function startTimer() {
    intervalId = setInterval(incrementTime, 300)
}

function clearTimer() {
    currentTime = 0
    displayCurrentTime()
}

function stopTimer() {
    clearInterval(intervalId)
}

startButton.addEventListener('click', startTimer)
resetButton.addEventListener('click', clearTimer)
stopButton.addEventListener('click', stopTimer)
