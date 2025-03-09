import React, { useState } from "react";
import {
  useGetPokemonListQuery,
  useGetPokemonByNameQuery,
} from "../store/rtkQuery/pokemonApi";

function PokemonListRTKQuery() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const {
    data: pokemons,
    error: error,
    isLoading: loading,
  } = useGetPokemonListQuery();
  const {
    data: pokemonDetail,
    error: detailError,
    isLoading: detailLoading,
  } = useGetPokemonByNameQuery(selectedPokemon, { skip: !selectedPokemon });

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>RTK Query 방식</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h2>포켓몬 목록</h2>
          <ul>
            {pokemons?.map((item) => (
              <li key={item.name} onClick={() => setSelectedPokemon(item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>포켓몬 상세정보</h2>
        {detailLoading ? (
          <div>로딩중...</div>
        ) : (
          pokemonDetail && (
            <div>
              <h3>이름: {pokemonDetail.name}</h3>
              <img src={pokemonDetail.sprites} alt={pokemonDetail.name} />
              <p>키: {pokemonDetail.height}</p>
              <p>몸무게: {pokemonDetail.weight}</p>
              <p>
                타입: {pokemonDetail.types.map((t) => t.type.name).join(", ")}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PokemonListRTKQuery;
