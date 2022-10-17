const foodName = prompt('Digite o nome da comida a ser consultada')

const food = stock.find((food) => food.name === foodName)

if (!food || !food.available) {
    alert(`${foodName} is not available`)
} else {
    const formattedPrice = food.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    alert(`${foodName} costs ${formattedPrice}`)
}
