let currentTime = 0

function incrementTime() {
    currentTime++
    console.log('currentTime:', currentTime)
}

const intervalId = setInterval(incrementTime, 1000)

const button = document.querySelector('button')
button.addEventListener('click', () => clearInterval(intervalId))
