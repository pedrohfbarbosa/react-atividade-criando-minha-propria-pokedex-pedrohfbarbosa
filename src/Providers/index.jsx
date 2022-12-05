import { FavoritesProvider } from "./FavoritesProvider";
import { PokemonProvider } from "./PokemonsProvider";
import { SearchProvider } from "./SearchProvider";

export const Providers = ({ children }) => {
  return (
    <PokemonProvider>
      <FavoritesProvider>
        <SearchProvider>{children}</SearchProvider>
      </FavoritesProvider>
    </PokemonProvider>
  );
};
