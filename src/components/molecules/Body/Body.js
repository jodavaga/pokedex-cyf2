import React, { useState, useContext, useEffect } from "react";
import { PokemonContext } from "../../../contexts/PokemonContext";
import useApiPokemon from "../../../hooks/useApiPokemon";

import "./styles.css";

export const Body = () => {
  const { pokemon } = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState({});
  console.log("🚀 ~ file: Body.js ~ line 10 ~ Body ~ pokemonData", pokemonData);

  const { getPokemonByName } = useApiPokemon();

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((e) => console.log("Error:", e));
  }, [pokemon]);

  return (
    <div className="body-wrapper">
      <h1>{pokemon ? pokemon.name : "No haz escogido el pokemon"}</h1>
      <img src={pokemonData?.sprites?.front_default} alt="" />
    </div>
  );
};
