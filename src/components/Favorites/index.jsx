import { useContext } from "react";
import { FavoritesContext } from "../../Providers/FavoritesProvider";
import { PokemonCard } from "../PokemonCard";
import { FavoriteStyled } from "./style";

export const Favorites = () => {
  const { favoritesList, removeFavorite } = useContext(FavoritesContext);
  return (
    <FavoriteStyled>
      <h2>Meus Pokemons</h2>
      {!favoritesList.length ? (
        <p>Sem favoritos no momento</p>
      ) : (
        <ul>
          {favoritesList.map((e) => (
            <PokemonCard
              key={e.id}
              pokemon={e}
              handleClick={() => removeFavorite(e.id)}
              btnMessage="Remover"
            />
          ))}
        </ul>
      )}
    </FavoriteStyled>
  );
};
