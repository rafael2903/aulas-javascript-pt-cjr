stock.forEach(({ name, price }) => {
    const formattedPrice = price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    console.log(`${name}: ${formattedPrice}`)
})
