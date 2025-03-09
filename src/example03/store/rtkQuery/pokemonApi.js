import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonList: builder.query({
            query: () => 'pokemon?limit=10',
            transformResponse: (response) => response.results,
        }),
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
            transformResponse: (response) => ({
                name: response.name,
                height: response.height,
                weight: response.weight,
                sprites: response.sprites,
                types: response.types
            })
        })
    })
});

export const { 
    useGetPokemonListQuery, 
    useGetPokemonByNameQuery 
} = pokemonApi;