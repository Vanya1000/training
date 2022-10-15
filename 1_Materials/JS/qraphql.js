//+ Querry
  // получение данных с сервера https://graphqlzero.almansi.me/api
  `query Todos {
    todos {
      data {
        id
        title
        completed
        user {
          name
          address {
            city
          }
        }
      }
    }
  }`

  const makeRequest = (query) => {
    return fetch('https://graphqlzero.almansi.me/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json())
  }
  
  makeRequest(`query Todos {
    todos {
      data {
        id
        title
        completed
        user {
          name
          address {
            city
          }
        }
      }
    }
  }`).then(({data}) => data.todos.data.forEach(todo => printTodo(todo)) )//? 

  // получение данных по параметрам https://graphqlzero.almansi.me/api
  `query Todos ($options: PageQueryOptions) {
    todos(options: $options) {
      data {
        id
        title
        completed
        user {
          name
          address {
            city
          }
        }
      }
    }
  }`
  // query variables
  `{
    "options": {
      "search": {
        "q": "dolor"
      },
      "sort": {
        "field": "id",
        "order": "ASC"
      }
    }
  }`
//+ Mutation
`
mutation ChangeStatus($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    id
    title
    completed
  }
}`
// query variables
`{
  "id": 1,
  "input": {
    "title": "Hello"
  }
}`

async function handleTodoStatus() {
  const todoId = this.parentElement.dataset.id;

  const changeStatusQuery = `mutation ChangeStatus {
      updateTodo(id: "${todoId}", input: {completed: ${this.checked}}) {// id: "${todoId}" - id задачи
          completed // вернуть статус
      }
  }`;

  const data = await makeRequest(changeStatusQuery);
  if (data.data.updateTodo.completed) {
    this.setAttribute("checked", "true");
  } else {
    this.removeAttribute("checked");
  }
}
// --------------------------------------------------------------------

async function addTaskHandler(e) {
  e.preventDefault(); // нативная форма
  if (addForm.taskname.value) { // если есть значение
    const newTaskQuery = `mutation CreateTodo {
      createTodo(input:{title: "${addForm.taskname.value}", completed: false}){
        title
        completed
        id
      }
    }`;

    const data = await makeRequest(newTaskQuery);
    printTodo(data.data.createTodo);
    addForm.reset();
  }
}


async function findTodos(e) {
  e.preventDefault();
  const searchText = searchForm.searchname.value;

  if (searchText) {
    const searchQuery = `query searchQuery{
        todos(options:{search:{q: "${searchText}"}, sort:{field: "id", order: ASC}}){
            data {
              id
              title
              completed
              user { name }
            }
          }
    }`;
    const { data } = await makeRequest(searchQuery);

    todos.innerHTML = "";
    data.todos.data.forEach((todo) => printTodo(todo));
  }
}

