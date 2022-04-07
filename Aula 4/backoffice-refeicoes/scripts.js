let currentPage = 1
const MEALS_PER_PAGE = 4

function deleteMeal(mealId) {
    meals = meals.filter((meal) => {
        return meal.id !== mealId
    })
    render()
}

function getTotalPages() {
    return Math.ceil(meals.length / MEALS_PER_PAGE)
}

function getCurrentPageMeals() {
    const startIndex = (currentPage - 1) * MEALS_PER_PAGE
    const endIndex = startIndex + MEALS_PER_PAGE

    return meals.slice(startIndex, endIndex)
}

function getShortText(text, maxLength) {
    return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`
}

function createMealNotAvailableElement() {
    const mealNotAvailableElement = document.createElement('span')
    mealNotAvailableElement.textContent = 'Refeição Indisponível'
    mealNotAvailableElement.classList.add('meal_is_not_available')

    return mealNotAvailableElement
}

function createCardHeader(meal) {
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('meal_image')

    const mealImg = document.createElement('img')
    mealImg.src = meal.image
    mealImg.alt = meal.name

    const mealName = document.createElement('span')
    mealName.textContent = meal.name
    mealName.classList.add('meal_name')

    cardHeader.appendChild(mealImg)
    cardHeader.appendChild(mealName)

    if (meal.quantity === 0) {
        const mealNotAvailableElement = createMealNotAvailableElement()
        cardHeader.appendChild(mealNotAvailableElement)
    }

    return cardHeader
}

function createCardContent(meal) {
    const cardContent = document.createElement('div')
    cardContent.classList.add('meal_card_content')

    const mealDescription = document.createElement('p')
    mealDescription.textContent = getShortText(meal.instructions, 50)

    const price = meal.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    const mealPrice = document.createElement('p')
    mealPrice.classList.add('meal_price')
    mealPrice.textContent = `${price} por porção`

    cardContent.appendChild(mealDescription)
    cardContent.appendChild(mealPrice)

    return cardContent
}
function createButtonElement(textContent) {
    const buttonElement = document.createElement('button')
    buttonElement.type = 'button'
    buttonElement.textContent = textContent

    return buttonElement
}

function createCardActions(meal) {
    const cardActions = document.createElement('div')
    cardActions.classList.add('meal_card_actions')

    const editButton = createButtonElement('editar')
    editButton.classList.add('edit')

    const deleteButton = createButtonElement('excluir')
    deleteButton.type = 'button'
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', () => deleteMeal(meal.id))

    cardActions.appendChild(editButton)
    cardActions.appendChild(deleteButton)

    return cardActions
}

function createMealsCard(meal) {
    const mealCard = document.createElement('div')
    mealCard.id = meal.id
    mealCard.classList.add('meal_card')

    const cardHeader = createCardHeader(meal)
    const cardContent = createCardContent(meal)
    const cardActions = createCardActions(meal)

    mealCard.appendChild(cardHeader)
    mealCard.appendChild(cardContent)
    mealCard.appendChild(cardActions)

    return mealCard
}

function createMealsCards(mealData) {
    return mealData.map(createMealsCard)
}

function renderMeals() {
    const mealData = getCurrentPageMeals()
    const mealCards = createMealsCards(mealData)

    const mealsContainer = document.querySelector('.meals')

    mealsContainer.replaceChildren()

    mealCards.forEach((mealCard) => {
        mealsContainer.appendChild(mealCard)
    })
}

function changePage(newPage) {
    const totalPages = getTotalPages()
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage
        render()
    }
}

function createPrevPageButton() {
    const prevPageButton = createButtonElement('<<')
    prevPageButton.addEventListener('click', () => {
        changePage(currentPage - 1)
    })

    return prevPageButton
}

function createNextPageButton() {
    const nextPageButton = createButtonElement('>>')
    nextPageButton.addEventListener('click', () => {
        changePage(currentPage + 1)
    })

    return nextPageButton
}

function createPaginationButton(page) {
    const paginationButton = createButtonElement(page)
    if (page == currentPage) paginationButton.classList.add('active')
    paginationButton.addEventListener('click', () => changePage(page))
    return paginationButton
}

function renderPagination(totalPages) {
    const pagination = document.querySelector('.pagination')
    pagination.replaceChildren()

    if (totalPages) {
        const prevPageButton = createPrevPageButton()
        pagination.appendChild(prevPageButton)

        for (let page = 1; page <= totalPages; page++) {
            const paginationButton = createPaginationButton(page)
            pagination.appendChild(paginationButton)
        }

        const nextPageButton = createNextPageButton()
        pagination.appendChild(nextPageButton)
    }
}

function render() {
    const totalPages = getTotalPages()
    console.log('totalPages:', totalPages)

    renderMeals()
    renderPagination(totalPages)
}

render()
