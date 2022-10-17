function createArray(n) {
    if (n < 1) {
        return []
    }

    const array = [];
    for (let index = n; index > 0; index--) {
        array.push(index)
    }

    // ou
    // const array = Array(10).fill().map((_, index) => index + 1).reverse() 

    return array
}

console.log(createArray(10))