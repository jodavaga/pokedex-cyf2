import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "../../../contexts/PokemonContext";

// hooks
import useApiPokemon from "../../../hooks/useApiPokemon";

import "./styles.css";

let Content;

export const Sidebar = () => {
  const [pokeList, setPokeList] = useState();
  const { getPokemonList } = useApiPokemon();

  //Consumimos  el contexto
  const { pokemon, setPokemon } = useContext(PokemonContext);

  useEffect(() => {
    // setteamos la lista de pokemones
    const setPokemonList = async () =>
      setPokeList(await getPokemonList(10, 50));
    setPokemonList();
  }, []);

  const handlePokemonClick = (index) => {
    setPokemon(pokeList[index]);
  };

  if (!pokeList) {
    Content = <p>Loading...</p>;
  } else {
    Content = pokeList.map((item, index) => (
      <li key={index} onClick={() => handlePokemonClick(index)}>
        {item.name}
      </li>
    ));
  }

  return (
    <div className="sidebar-wrapper">
      <ul>{Content}</ul>
    </div>
  );
};
