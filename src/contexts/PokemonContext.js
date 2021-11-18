import { createContext, useState } from "react";

export const PokemonContext = createContext();

export default function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({});

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
