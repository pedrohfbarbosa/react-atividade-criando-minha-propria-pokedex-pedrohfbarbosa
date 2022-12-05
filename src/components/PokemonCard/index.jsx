import { useContext } from "react";
import { AiOutlineStar} from "react-icons/ai";
import { FavoritesContext } from "../../Providers/FavoritesProvider";
import { PokemonContext } from "../../Providers/PokemonsProvider";
import { CardStyled } from "./style";

export const PokemonCard = ({ pokemon }) => {
  const { addFavorite } = useContext(FavoritesContext);

  //const {} = useContext(PokemonContext);

  return (
    <CardStyled>
      <div>
        <h3>{pokemon.name}</h3>
        <button onClick={() => addFavorite(pokemon.url)}>
          <AiOutlineStar style={{ backgroundColor: "yellow" }} />
        </button>
      </div>
    </CardStyled>
  );
};
