function sum(a, b) {
    a = Number(a)
    b = Number(b)

    if (Number.isNaN(a) || Number.isNaN(b)) throw new Error('Invalid numbers')

    const sum = a + b
    console.log('sum:', sum)

    return sum
}

sum(1, 2) // 3
sum('2', '3') // 5
sum('a', 3) // Uncaught Invalid numbers
