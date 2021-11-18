import { API_URL, RESOURCES } from "../assets/constants";

function useApiPokemon() {
  const getPokemonList = async (limit = 100, offset = 0) => {
    const result = await fetch(
      `${API_URL}${RESOURCES.getPokemon}?limit=${limit}&offset=${offset}`
    );
    const data = await result.json();
    const pokemonList = data.results;
    console.log("🚀 ~ ~ pokemonList", pokemonList);

    return pokemonList;
  };

  // const getPokemonByName = async (pokeName) => {
  //   const result = await fetch(`${API_URL}${RESOURCES.getPokemon}/${pokeName}`);
  //   const data = await result.json();

  //   return data;
  // };

  return { getPokemonList };
}

export default useApiPokemon;
