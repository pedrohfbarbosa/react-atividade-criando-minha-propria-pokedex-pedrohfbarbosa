import { useContext } from "react";
import { FavoritesContext } from "../../Providers/FavoritesProvider";
import { ContainerMinor } from "../../styles/ContainerMinor";
import { FavoriteCard } from "./FavoriteCard";
import { FavoriteStyled } from "./style";

export const Favorites = () => {
  const { favoritesList } = useContext(FavoritesContext);
  return (
    <FavoriteStyled>
      <h2>Meus Pokemons</h2>
      {!favoritesList.length ? (
        <p>Sem favoritos no momento</p>
      ) : (
        <ul>
          {favoritesList.map((e) => (
            <FavoriteCard key={e.id} pokemon={e} />
          ))}
        </ul>
      )}
    </FavoriteStyled>
  );
};
