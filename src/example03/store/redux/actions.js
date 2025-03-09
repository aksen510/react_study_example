export const fetchPokemonsRequest = () => ({
    type: 'FETCH_POKEMONS_REQUEST'
  });
  
  export const fetchPokemonsSuccess = (pokemons) => ({
    type: 'FETCH_POKEMONS_SUCCESS',
    payload: pokemons
  });
  
  export const fetchPokemonsFailure = (error) => ({
    type: 'FETCH_POKEMONS_FAILURE',
    payload: error
  });