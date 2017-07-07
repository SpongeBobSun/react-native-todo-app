import { ActionsConstants } from '../actions/actions';

const initialState = [];

export default function todos(state = initialState, action) {
  let todos = state.slice();
  switch (action.type) {
    case ActionsConstants.ADD_TODO:
      todos.push(action.data);
      return todos;
    case ActionsConstants.DONE_TODO: {
      let index = todos.indexOf(action.data);
      if (index < 0) {
        return state;
      }
      let done = Object.assign({}, action.data);
      done.done = true;
      delete todos[index];
      todos[index] = done;
      return todos;
    }
    case ActionsConstants.UNCHECK: {
      let index = todos.indexOf(action.data);
      if (index < 0) {
        return state;
      }
      let uncheck = Object.assign({}, action.data);
      uncheck.done = false;
      delete todos[index];
      todos[index] = uncheck;
      return todos;
    }
    default:
      return state;
  }
}