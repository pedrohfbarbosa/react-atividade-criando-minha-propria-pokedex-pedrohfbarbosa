import { useContext } from "react";
import { FavoritesContext } from "../../../Providers/FavoritesProvider";

export const FavoriteCard = ({ pokemon }) => {
  const { removeFavorite } = useContext(FavoritesContext);
  return (
    <li>
      <div>
        <h3>{pokemon.name}</h3>
        <button onClick={() => removeFavorite(pokemon.id)}>
          Remover dos favoritos
        </button>
      </div>
    </li>
  );
};
