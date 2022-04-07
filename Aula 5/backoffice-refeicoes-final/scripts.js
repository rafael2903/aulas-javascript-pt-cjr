const MEALS_PER_PAGE = 4
let currentPage = 1

function getTotalPages() {
    return Math.ceil(meals.length / MEALS_PER_PAGE)
}

function getShortText(text, maxSize = 30) {
    return text.length <= maxSize ? text : `${text.slice(0, maxSize)}...`
}

function deleteMeal(id) {
    meals = meals.filter((meal) => meal.id !== id)
    render()
}

function createMealNotAvailableElement() {
    const mealNotAvailableElement = document.createElement('span')
    mealNotAvailableElement.textContent = 'Refeição indisponível'
    mealNotAvailableElement.classList.add('meal_is_not_available')

    return mealNotAvailableElement
}

function createButtonElement(textContent) {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = textContent
    buttonElement.type = 'button'
    return buttonElement
}

function createCardHeader(meal) {
    const mealImg = document.createElement('img')
    mealImg.src = meal.image
    mealImg.alt = meal.name

    const mealName = document.createElement('span')
    mealName.textContent = getShortText(meal.name, 17)
    mealName.classList.add('meal_name')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('meal_image')
    cardHeader.appendChild(mealImg)
    cardHeader.appendChild(mealName)

    if (meal.quantity === 0) {
        const mealNotAvailableElement = createMealNotAvailableElement()
        cardHeader.appendChild(mealNotAvailableElement)
    }

    return cardHeader
}

function createCardContent(meal) {
    const mealDescription = document.createElement('p')
    mealDescription.textContent = getShortText(meal.instructions, 50)

    mealDescription.classList.add('meal_description')

    const mealPrice = document.createElement('p')

    const price = meal.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    mealPrice.textContent = `${price} por porção`
    mealPrice.classList.add('meal_price')

    const cardContent = document.createElement('div')
    cardContent.classList.add('meal_card_content')
    cardContent.appendChild(mealDescription)
    cardContent.appendChild(mealPrice)

    return cardContent
}

function createCardActions(meal) {
    const cardActions = document.createElement('div')
    cardActions.classList.add('meal_card_actions')

    const editButton = createButtonElement('editar')
    editButton.classList.add('edit')

    const deleteButton = createButtonElement('excluir')
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', () => deleteMeal(meal.id))

    cardActions.appendChild(editButton)
    cardActions.appendChild(deleteButton)

    return cardActions
}

function createMealCard(meal) {
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

function getCurrentPageMeals() {
    const start = (currentPage - 1) * MEALS_PER_PAGE
    const end = start + MEALS_PER_PAGE
    return meals.slice(start, end)
}

function createMealsCards(mealsData) {
    return mealsData.map(createMealCard)
}

function renderMeals() {
    const mealsData = getCurrentPageMeals()
    const mealsCards = createMealsCards(mealsData)

    const mealsContainer = document.querySelector('.meals')
    mealsContainer.replaceChildren()
    mealsCards.forEach((mealCard) => mealsContainer.appendChild(mealCard))
}

function render() {
    const totalPages = getTotalPages()
    if (currentPage > totalPages) currentPage = totalPages

    renderPagination(totalPages)
    renderMeals()
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
    if (page === currentPage) paginationButton.classList.add('active')
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

render()
