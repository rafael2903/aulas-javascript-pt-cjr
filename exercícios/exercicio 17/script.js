const day = prompt('Insira um dia:')
const month = prompt('Insira um mês:')
const year = prompt('Insira um ano:')

const today = new Date()
const date = new Date(year, month - 1, day)

const todayString = today.toLocaleDateString()
const dateString = date.toLocaleDateString()

const MILLISECONDS_IN_A_DAY = 3600 * 24 * 1000

const dateDifferenceInMilliseconds = date - today
const dateDifferenceInDays = Math.trunc(
    dateDifferenceInMilliseconds / MILLISECONDS_IN_A_DAY
)

alert(
    `A diferença entre as datas ${dateString} e ${todayString} é de ${dateDifferenceInDays} dias`
)
