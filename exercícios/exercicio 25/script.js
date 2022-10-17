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
        const newStock = stock.map((food) => {
            if (food.name === foodName) {
                const newFood = { ...food }
                newFood.quantity += quantity
                newFood.available = Boolean(food.quantity)
                return newFood
            } else {
                return { ...food }
            }
        })
        console.log(stock)
        console.log(newStock)
    }
} else {
    alert(`${foodName} não está presente no estoque`)
}
