const inputElement = document.querySelector('body > input[type=text]')

const handleChange = (event) => {
    alert(`Você digitou ${event.target.value}`)
}

inputElement.addEventListener('change', handleChange)
