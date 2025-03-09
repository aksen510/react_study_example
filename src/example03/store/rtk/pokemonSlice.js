import { createSlice } from '@reduxjs/toolkit';

// 비동기 액션 생성자 추가
export const fetchPokemonList = () => async (dispatch) => {
    try {
        dispatch(fetchStart());
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        dispatch(fetchSuccess(data.results));
    } catch (error) {
        dispatch(fetchError(error.message));
    }
};

export const fetchPokemonDetail = (name) => async (dispatch) => {
    try {
        dispatch(fetchStart());
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        dispatch(fetchDetailSuccess(data));
    } catch (error) {
        dispatch(fetchError(error.message));
    }
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        list: [],
        selectedPokemon: null,
        loading: false,
        error: null
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.list = action.payload;
            state.error = null;
        },
        fetchDetailSuccess: (state, action) => {
            state.loading = false;
            state.selectedPokemon = action.payload;
            state.error = null;
        },
        fetchError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchStart, fetchSuccess, fetchDetailSuccess, fetchError } = pokemonSlice.actions;
export default pokemonSlice.reducer;