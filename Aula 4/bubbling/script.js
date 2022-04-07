const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

div1.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Clicou na div 1')
})

div2.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Clicou na div 2')
})

div3.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Clicou na div 3')
})
