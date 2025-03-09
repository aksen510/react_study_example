import { createStore } from 'redux';
import pokemonReducer from './reducer';

const store = createStore(pokemonReducer);

export default store;