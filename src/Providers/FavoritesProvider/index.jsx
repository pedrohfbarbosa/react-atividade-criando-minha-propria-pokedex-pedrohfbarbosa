import { createContext, useState } from "react";
import { axiosAll } from "../../services/axios";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  const getPokemon = async (url) => {
    try {
      const response = await axiosAll.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async (url) => {
    const pokemon = await getPokemon(url);
    const testForExistingFavorite = favoritesList.find(
      (e) => e.id === pokemon.id
    );
    if (!testForExistingFavorite) {
      setFavoritesList([...favoritesList, pokemon]);
    } else {
      alert("Pokemon já está na lista de favoritos");
    }
  };

  const removeFavorite = (id) => {
    const newList = favoritesList.filter((e) => e.id !== id);
    setFavoritesList(newList);
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritesList, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
