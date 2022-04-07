const fs = require('fs/promises')

fs.readFile('./fi3le1.txt', 'utf8')
    .then((data) => fs.readFile(data, 'utf8'))
    .then((data) => fs.readFile(data, 'utf8'))
    .then((data) => fs.readFile(data, 'utf8'))
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'))

console.log('executado antes')
