import RootReducer from '../reducers';
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const store = createStore(RootReducer, compose(applyMiddleware(thunk), autoRehydrate()));
persistStore(store, {
  whitelist: ['todos', ],
  storage: AsyncStorage,
}, () => {
  AsyncStorage.getAllKeys().then((keys) => {
    return AsyncStorage.getItem(keys[0]);
  })
  .then( data => console.log(data));
});
export default store;
