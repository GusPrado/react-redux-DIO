export function addTodo(text) {
  return  {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      name: text
    }
  }
}