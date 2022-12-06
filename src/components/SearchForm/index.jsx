import React, { useContext } from "react";
import { FavoritesContext } from "../../Providers/FavoritesProvider";
import { SearchContext } from "../../Providers/SearchProvider";
import { PokemonCard } from "../PokemonCard";
import { Form } from "./Form";
import { FormWrapper } from "./style";

export const SearchForm = () => {
  const { pokemonSearch } = useContext(SearchContext);
  const { addFavorite } = useContext(FavoritesContext);
  return (
    <FormWrapper>
      <h2>Buscar meu pokemon</h2>
      <Form />

      {pokemonSearch && (
        <ul>
          <PokemonCard
            pokemon={pokemonSearch}
            handleClick={() => addFavorite(pokemonSearch.url)}
            btnMessage="Favoritar"
          />
        </ul>
      )}
    </FormWrapper>
  );
};
