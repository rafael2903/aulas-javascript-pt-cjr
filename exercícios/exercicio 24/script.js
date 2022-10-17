const foodName = prompt('Digite o nome da comida:')
const food = stock.find((food) => food.name == foodName)

if (food) {
    const quantity = Number(
        prompt(
            `Digite a quantidade de ${foodName} que deseja adicionar/remover:`
        )
    )

    if (quantity + food.quantity < 0) {
        alert(
            'Não é possível remover mais do que a quantidade presente em estoque'
        )
    } else {
        food.quantity += quantity
        food.available = Boolean(food.quantity)
    }
} else {
    alert(`${foodName} não está presente no estoque`)
}

console.log(stock)
