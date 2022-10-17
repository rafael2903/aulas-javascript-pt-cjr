function flat(array) {
    let newArray = []
    array.forEach((element) => {
        newArray = [...newArray, ...element] // ou newArray.concat(element)
    })

    // ou
    // const newArray = array.reduce((accumulator, element) => {
    // return [...accumulator, ...element] // ou accumulator.concat(element)
    // }, [])

    return newArray.sort()
}

console.log(flat([[2, 3, 1], [8, 4], [5], [9, 7, 6]]))
