const numberView = document.getElementById('number')
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')

const handleIncrementClick = () => {
    if (Number(numberView.textContent) <= 10)
        numberView.textContent = Number(numberView.textContent) + 1
    else {
        incrementButton.removeEventListener('click', handleIncrementClick)
        decrementButton.removeEventListener('click', handleDecrementClick)
    }
}

const handleDecrementClick = () => {
    numberView.textContent = Number(numberView.textContent) - 1
}

incrementButton.addEventListener('click', handleIncrementClick)
decrementButton.addEventListener('click', handleDecrementClick)
