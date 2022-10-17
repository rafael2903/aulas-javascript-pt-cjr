# Exercício 26

Para esse exercício, utilize a variável *stock* presente no arquivo *data.js*. Implemente uma função chamada **group** baseada no [método group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group). A função deve receber **um array** como primeiro parâmetro e **uma função** como segundo parâmetro. Ela deve **agrupar** os elementos do array de acordo com a string retornada ao **chamar** a função recebida passando cada elemento. Ela deve retornar **um objeto** com propriedades separadas para cada grupo, contendo arrays com os elementos do grupo.

## Exemplo

```js
Entrada

group(stock, (food) => food.category)

Saída

{
    "fruit": [
        {
            "id": 1,
            "name": "apple",
            "category": "fruit",
            "quantity": 3,
            "available": true,
            "price": 1
        },
        {
            "id": 3,
            "name": "banana",
            "category": "fruit",
            "quantity": 0,
            "available": false,
            "price": 1.75
        },
        {
            "id": 5,
            "name": "orange",
            "category": "fruit",
            "quantity": 2,
            "available": true,
            "price": 1.5
        },
        {
            "id": 7,
            "name": "pear",
            "category": "fruit",
            "quantity": 0,
            "available": false,
            "price": 1
        },
        {
            "id": 9,
            "name": "grape",
            "category": "fruit",
            "quantity": 10,
            "available": true,
            "price": 1.25
        },
        {
            "id": 11,
            "name": "kiwi",
            "category": "fruit",
            "quantity": 0,
            "available": false,
            "price": 1
        },
        {
            "id": 13,
            "name": "strawberry",
            "category": "fruit",
            "quantity": 4,
            "available": true,
            "price": 3
        }
    ],
    "vegetable": [
        {
            "id": 2,
            "name": "carrot",
            "category": "vegetable",
            "quantity": 5,
            "available": true,
            "price": 0.5
        },
        {
            "id": 4,
            "name": "broccoli",
            "category": "vegetable",
            "quantity": 0,
            "available": false,
            "price": 0.75
        },
        {
            "id": 6,
            "name": "celery",
            "category": "vegetable",
            "quantity": 1,
            "available": true,
            "price": 0.5
        },
        {
            "id": 8,
            "name": "spinach",
            "category": "vegetable",
            "quantity": 0,
            "available": false,
            "price": 0.75
        },
        {
            "id": 10,
            "name": "asparagus",
            "category": "vegetable",
            "quantity": 7,
            "available": true,
            "price": 1.75
        },
        {
            "id": 12,
            "name": "cauliflower",
            "category": "vegetable",
            "quantity": 0,
            "available": false,
            "price": 2
        }
    ]
}
```
