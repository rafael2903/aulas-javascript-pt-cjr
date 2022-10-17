const totalStockValue = stock.reduce(
    (accumulator, food) => accumulator + food.quantity * food.price,
    0
)

console.log(totalStockValue)