let items = []

const root = document.querySelector('#root')

const input = document.createElement('input')
const itemsContainer = document.createElement('div')

const button = document.createElement('button')
button.textContent = 'adicionar item'

function addItem() {
    const newItem = {
        checked: false,
        label: input.value,
        id: Date.now(),
    }
    items.push(newItem)
    input.value = ''
    renderItems()
}

button.addEventListener('click', addItem)

root.appendChild(input)
root.appendChild(button)
root.appendChild(itemsContainer)

function removeItem(id) {
    items = items.filter((item) => item.id != id)
    renderItems()
}

function renderItem(item) {
    const itemContainer = document.createElement('div')

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', () => removeItem(item.id))

    const itemLabel = document.createElement('label')
    itemLabel.textContent = item.label

    const itemCheckbox = document.createElement('input')
    itemCheckbox.type = 'checkbox'
    itemCheckbox.checked = item.checked

    itemCheckbox.addEventListener('change', (event) => {
        items.find(({ id }) => id == item.id).checked = event.target.checked
        renderItems()
    })

    itemLabel.insertAdjacentElement('afterbegin', itemCheckbox)

    itemContainer.appendChild(itemLabel)
    itemContainer.appendChild(deleteButton)

    itemsContainer.appendChild(itemContainer)
}

function renderItems() {
    localStorage.setItem('items', JSON.stringify(items))
    itemsContainer.replaceChildren()
    items.forEach(renderItem)
}

if (!items.length) {
    items = JSON.parse(localStorage.getItem('items')) || items
    renderItems()
}
