function group(array, callback) {
    const result = {}
    array.forEach((element) => {
        const key = callback(element)
        if (key in result) result[key].push(element)
        else result[key] = [element]
    })
    return result
}

console.log(group(stock, (food) => food.quantity))
