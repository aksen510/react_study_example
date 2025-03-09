import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonList,
  fetchPokemonDetail,
} from "../store/rtk/pokemonSlice";

function PokemonListRTK() {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("");
  const { list, selectedPokemon, loading, error } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const onclickPokemon = (name) => {
    setPokemon(name);
    dispatch(fetchPokemonDetail(pokemon));
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>RTK 방식</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h2>포켓몬 목록</h2>
          <ul>
            {list?.map((item) => (
              <li key={item.name} onClick={() => onclickPokemon(item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>포켓몬 상세정보</h2>
          {pokemon && selectedPokemon && (
            <div>
              <h3>이름: {selectedPokemon.name}</h3>
              <img src={selectedPokemon.sprites} alt={selectedPokemon.name} />
              <p>키: {selectedPokemon.height}</p>
              <p>몸무게: {selectedPokemon.weight}</p>
              <p>
                타입:{selectedPokemon.types?.map((t) => t.type.name).join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonListRTK;
