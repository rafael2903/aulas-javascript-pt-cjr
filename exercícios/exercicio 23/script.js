function foodExists(foodName) {
    return stock
        .filter((food) => food.available)
        .map((food) => food.name)
        .includes(foodName)
}

console.log(foodExists('apple'))
console.log(foodExists('broccoli'))
console.log(foodExists('biscuit'))
