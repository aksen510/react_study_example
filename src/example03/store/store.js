import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './rtkQuery/pokemonApi';
import pokemonSlice from './rtk/pokemonSlice';
import pokemonReducer from './redux/reducer';

// Redux store
export const reduxStore = createStore(pokemonReducer);

// RTK store
export const rtkStore = configureStore({
    reducer: {
        pokemon: pokemonSlice
    }
});

// RTK Query store
export const rtkQueryStore = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default reduxStore;