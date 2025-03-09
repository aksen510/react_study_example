import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { 
  fetchPokemonsRequest, 
  fetchPokemonsSuccess, 
  fetchPokemonsFailure 
} from '../store/redux/actions';

function PokemonList() {
  const dispatch = useDispatch();
  const { pokemons = [], loading, error } = useSelector(state => state);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(fetchPokemonsRequest());
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        dispatch(fetchPokemonsSuccess(response.data.results));
      } catch (error) {
        dispatch(fetchPokemonsFailure(error.message));
      }
    };

    fetchPokemons();
  }, [dispatch]);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      if (!selectedPokemon) return;
      
      setDetailLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        setPokemonDetail(response.data);
      } catch (error) {
        console.error('포켓몬 상세정보 조회 실패:', error);
      }
      setDetailLoading(false);
    };

    fetchPokemonDetail();
  }, [selectedPokemon]);

  if (loading) return <div>포켓몬 목록을 불러오는 중...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pokemons || pokemons.length === 0) return <div>포켓몬이 없습니다</div>;

  return (
    <div>
      <h1>Redux 방식</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h2>포켓몬 목록</h2>
          <ul>
            {pokemons.map(pokemon => (
              <li 
                key={pokemon.name}
                onClick={() => setSelectedPokemon(pokemon.name)}
                style={{ cursor: 'pointer' }}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>

        {selectedPokemon && (
          <div>
            <h2>포켓몬 상세정보</h2>
            {detailLoading ? (
              <div>상세정보를 불러오는 중...</div>
            ) : pokemonDetail && (
              <div>
                <h3>{pokemonDetail.name}</h3>
                <img 
                  src={pokemonDetail.sprites.front_default} 
                  alt={pokemonDetail.name}
                />
                <p>키: {pokemonDetail.height}</p>
                <p>몸무게: {pokemonDetail.weight}</p>
                <p>타입: {pokemonDetail.types.map(t => t.type.name).join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonList;