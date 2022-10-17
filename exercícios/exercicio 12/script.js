const mean = (...numbers) => {
    // numbers => [5,6,7,4]
    // accumulator = 0, currentValue = 5 => 0 + 5 = 5
    // accumulator = 5, currentValue = 6 => 5 + 6 = 11
    // accumulator = 11, currentValue = 7 => 11 + 7 = 18
    // accumulator = 18, currentValue = 4 => 18 + 4 = 22
    const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
    const mean = sum / numbers.length
    const roundedMean = Math.round(mean)

    return roundedMean
}

console.log(mean(5, 6, 7, 4))
