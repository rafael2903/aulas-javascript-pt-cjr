function getRoots(a, b, c) {
    const delta = b ** 2 - 4 * a * c

    if (delta < 0) {
        console.log(`A função ${a}x^2 + ${b}x + ${c} não possui raízes reais`)
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(
            `As raízes da função ${a}x^2 + ${b}x + ${c} são ${x1} e ${x2}`
        )
    }
}

getRoots(2, 5, 1)
