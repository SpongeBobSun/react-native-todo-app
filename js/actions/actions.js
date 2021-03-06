export const ActionsConstants = {
  ADD_TODO:     'add_todo',
  DONE_TODO:    'done_todo',
  UNCHECK:      'uncheck',
}

export function addTodo(todo) {
  return {
    type: ActionsConstants.ADD_TODO,
    data: todo,
  }
}

export function doneTodo(todo) {
  return {
    type: ActionsConstants.DONE_TODO,
    data: todo,
  }
}

export function uncheck(todo) {
  return {
    type: ActionsConstants.UNCHECK,
    data: todo,
  }
}