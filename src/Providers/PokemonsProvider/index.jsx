import React, { useEffect, useState, createContext } from "react";
import { instance } from "../../services/axios";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [previousPage, setPreviousPage] = useState(true);

  const [page, setPage] = useState(0);

  const getPokemons = async (page) => {
    try {
      const response = await instance.get(`?offset=${page * 20}&limit=20`);
      
      setNextPage(!response.data.next);
      setPreviousPage(!response.data.previous);
      setPokemonList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons(page);
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        handleNextPage,
        handlePreviousPage,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
