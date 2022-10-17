function sayHello(name, lastName) {
    console.log(`Olá ${name} ${lastName}, eu sou uma função!`)
}

const name = prompt("Qual o seu primeiro nome?")
const lastName = prompt("Qual o seu sobrenome?")

sayHello(name, lastName)