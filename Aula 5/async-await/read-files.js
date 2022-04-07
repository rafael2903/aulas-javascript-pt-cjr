const fs = require('fs/promises')

async function readFiles() {
    try {
        const file1 = await fs.readFile('./file1.txt', 'utf8')
        const file2 = await fs.readFile(file1, 'utf8')
        const file3 = await fs.readFile(file2, 'utf8')
        const file4 = await fs.readFile(file3, 'utf8')
        console.log(file4)
    } catch (error) {
        console.log(error)
    }
}

readFiles()

console.log('executado antes')
