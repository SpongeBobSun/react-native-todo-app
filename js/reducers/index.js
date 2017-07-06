import { combineReducers } from 'redux';

import todos from './todos';

const RootReducer = combineReducers({
  todos: todos,
});

export default RootReducer;
