import { CgPokemon } from "react-icons/cg";
import { Container } from "../../styles/Container";
import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <div>
          <h1>
            Minha <span>Pokedex</span>
          </h1>
          <CgPokemon />
        </div>
      </Container>
    </HeaderStyled>
  );
};
