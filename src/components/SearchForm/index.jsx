import React, { useContext, useState } from "react";
import { SearchContext } from "../../Providers/SearchProvider";
import { ContainerMinor } from "../../styles/ContainerMinor";
import { PokemonCard } from "../PokemonCard";
import { Form } from "./Form";
import { FormWrapper } from "./style";

export const SearchForm = () => {
  const { pokemonSearch } = useContext(SearchContext);

  return (
    <FormWrapper>
      <h2>Buscar meu pokemon</h2>
      <Form />

      {pokemonSearch && (
        <ul>
          <PokemonCard pokemon={pokemonSearch} />
        </ul>
      )}
    </FormWrapper>
  );
};
