function sum(a, b) {
    a = Number(a)
    b = Number(b)

    if (Number.isNaN(a) || Number.isNaN(b)) throw new Error('Invalid numbers')

    const sum = a + b
    console.log('sum:', sum)

    return sum
}

const form = document.querySelector('form')
const resultContainer = document.getElementById('result')
const input1 = document.getElementById('number1')

const input2 = document.getElementById('number2')

function showResult(event) {
    event.preventDefault()
    try {
        resultContainer.textContent = sum(input1.value, input2.value)
    } catch (error) {
        resultContainer.textContent = error.message
    } finally {
        event.target.reset()
    }
}

form.addEventListener('submit', showResult)

console.log()
