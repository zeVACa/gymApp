import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => console.log('store: ', store.getState()));

export default store;
