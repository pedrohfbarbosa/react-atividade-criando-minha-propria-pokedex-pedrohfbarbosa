import { AppStyled } from "./AppStyled";
import { Favorites } from "./components/Favorites";
import { Header } from "./components/Header";
import { PokemonsList } from "./components/PokemonsList";
import { SearchForm } from "./components/SearchForm";
import { Container } from "./styles/Container";

export const App = () => {
  return (
    <AppStyled>
      <Header />
      <Container>
        <PokemonsList />
        <SearchForm/>
        <Favorites />
      </Container>
    </AppStyled>
  );
};
