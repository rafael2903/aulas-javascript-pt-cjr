const number1 = Number(prompt('Digite o número 1'))
const number2 = Number(prompt('Digite o número 2'))
const number3 = Number(prompt('Digite o número 3'))

const maxNumber = Math.max(number1, number2, number3)

//ou

// if (number1 > number2 && number1 > number3) {
//     alert(`O maior número é: ${number1}`)
// } else if (number2 > number1 && number2 > number3) {
//     alert(`O maior número é: ${number2}`)
// } else {
//     alert(`O maior número é: ${number3}`)
// }

alert(`O maior número é: ${maxNumber}`)
