const fs = require('fs')

// fs.readFile('./file1.txt', 'utf8', (err, data) => {
//     if (err) throw err
//     console.log('data:', data)
// })

try {
    fs.readFile('./filehhh1.txt', 'utf8', (err, data) => {
        console.log('data:', data)
        if (err) throw err
        fs.readFile(data, 'utf8', (err, data) => {
            console.log('data:', data)
            if (err) throw err
            fs.readFile(data, 'utf8', (err, data) => {
                console.log('data:', data)
                if (err) throw err
                fs.readFile(data, 'utf8', (err, data) => {
                    if (err) throw err
                    console.log('data:', data)
                })
            })
        })
    })
} catch (error) {
    console.log(error)
}

console.log('executado antes')
