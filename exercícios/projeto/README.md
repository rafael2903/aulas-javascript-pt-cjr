# Projetinho - Todo List


## Descrição

Crie uma aplicação de lista de tarefas. Deve ser possível adicionar um item, marcar um item como concluído e remover um item.

Todos os elementos devem ser criados com JavaScript. O único elemento que pode existir dentro da tag `<body>` é `<div id="root"></div>`

Trabalhe numa abordagem em que o estado é a “única fonte de verdade”:

Estado (lista de tarefas) -> montar os elementos html com esse estado -> ao ter um evento, alterar o estado -> ao alterar o estado, remontar a página.

Utilize o arquivo template.zip para começar

## Nível 1

Use uma variável global para guardar as tarefas. Ela deve ser um array de objetos, em que cada objeto representa uma tarefa. Cada tarefa deve ter 3 propriedades:

- checked: boolean ⇒ true ou false ⇒ representa se a tarefa está marcada como concluída ou não
- label: string ⇒ título da tarefa
- id: integer ⇒ um identificador único pra cada tarefa


Exemplo:


```js
[
	{
		id: 1664454143920,
		checked: true,
		label: "tarefa 1"
	},
	{
		id: 1664454144865,
		checked: false,
		label: "tarefa 2"
	}
]
```

- Toda vez que o usuário adicionar um item, ele deve ser adicionado ao array de tarefas.
- Toda vez que o usuário marcar uma tarefa como concluída, a propriedade checked da tarefa correspondente deve ser atualizada.
- Toda vez que usuário excluir uma tarefa, ela deve ser removida do array de tarefas.
- Toda vez que o array de tarefas mudar, deve ser feita uma nova “renderização”, ou seja, os elementos html que representam a lista devem ser removidos e adicionados novamente com os valores atualizados.


## Nível 2

Use o **localStorage** para salvar as tarefas, desse modo o usuário não vai perder as tarefas ao recarregar a página.

[https://www.alura.com.br/artigos/o-que-e-json](https://www.alura.com.br/artigos/o-que-e-json)

[https://tableless.com.br/guia-fácil-sobre-usar-localstorage-com-javascript/](https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/)

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## Nível 3

Agora use um servidor externo para armazenar as tarefas. Para isso você deve fazer requisições http por meio do método fetch.

[https://code.tutsplus.com/pt/tutorials/a-beginners-guide-to-http-and-rest--net-16340](https://code.tutsplus.com/pt/tutorials/a-beginners-guide-to-http-and-rest--net-16340)

[https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-pt](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-pt)

### Rotas:

**Pegar tarefas**

GET [https://todos-cjr.herokuapp.com/todos](https://todos-cjr.herokuapp.com/todos)

**Adicionar tarefa**

POST [https://todos-cjr.herokuapp.com/todos](https://todos-cjr.herokuapp.com/todos)

**Remover tarefa**

DELETE [https://todos-cjr.herokuapp.com/todos](https://todos-cjr.herokuapp.com/todos)/:id

**Atualizar tarefa**

PUT [https://todos-cjr.herokuapp.com/todos](https://todos-cjr.herokuapp.com/todos)/:id


**:id deve ser substituído pelo id da tarefa que você quer atualizar/deletar, por exemplo > https://todos-cjr.herokuapp.com/todos/1664454143920**