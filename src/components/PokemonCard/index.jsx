import { CardStyled } from "./style";

export const PokemonCard = ({ pokemon, handleClick, btnMessage }) => {
  return (
    <CardStyled>
      <div>
        <h3>{pokemon.name}</h3>
        <button onClick={handleClick}>
          {btnMessage}
        </button>
      </div>
    </CardStyled>
  );
};
