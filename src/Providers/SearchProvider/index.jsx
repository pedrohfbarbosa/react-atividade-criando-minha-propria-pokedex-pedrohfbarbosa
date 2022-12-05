import { createContext, useState } from "react";
import { instance } from "../../services/axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [pokemonSearch, setPokemonSearch] = useState(null);

  const getPokemon = async (name) => {
    try {
      const response = await instance.get(`${name}`);
      const pokemon = response.data;
      setPokemonSearch({
        ...pokemon,
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
      });
    } catch (error) {
      console.log(error);
      alert("nenhum pokemon encontrado");
    }
  };  

  return (
    <SearchContext.Provider value={{ pokemonSearch, getPokemon }}>
      {children}
    </SearchContext.Provider>
  );
};
