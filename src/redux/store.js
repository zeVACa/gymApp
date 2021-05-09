import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log('store: ', store.getState()));

export default store;
