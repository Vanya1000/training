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