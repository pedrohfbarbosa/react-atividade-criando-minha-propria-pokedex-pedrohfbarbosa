import { useContext } from "react";
import { FavoritesContext } from "../../Providers/FavoritesProvider";
import { PokemonContext } from "../../Providers/PokemonsProvider";
import { PokemonCard } from "../PokemonCard";
import { PokemonsListStyled } from "./style";

export const PokemonsList = () => {
  const {
    pokemonList,
    handleNextPage,
    handlePreviousPage,
    nextPage,
    previousPage,
  } = useContext(PokemonContext);

  const { addFavorite } = useContext(FavoritesContext);

  return (
    <PokemonsListStyled>
      <h2>Pokemons</h2>
      <ul>
        {pokemonList.map((e) => (
          <PokemonCard
            key={e.name}
            pokemon={e}
            handleClick={() => addFavorite(e.url)}
            btnMessage="Favoritar"
          />
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={previousPage}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={nextPage}>
          Next
        </button>
      </div>
    </PokemonsListStyled>
  );
};
