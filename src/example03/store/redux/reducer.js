const initialState = {
    pokemons: [],
    loading: false,
    error: null,
    selectedPokemon: null,
    pokemonDetail: null,
    detailLoading: false
  };

  export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_POKEMONS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_POKEMONS_SUCCESS':
        return {
          ...state,
          loading: false,
          pokemons: action.payload,
          error: null
        };
      case 'FETCH_POKEMONS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
          pokemons: []
        };
      default:
        return state;
    }
  }