const foodsNames = stock.map(
    (food) => food.name.at(0).toUpperCase() + food.name.slice(1)
)
console.log(foodsNames)
