const fruitsAvailableSorted = stock
    .filter((food) => food.category == 'fruit' && food.available)
    .map((food) => ({ name: food.name, quantity: food.quantity }))
    .sort((a, b) => a.quantity - b.quantity)

console.log(fruitsAvailableSorted)
