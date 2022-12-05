import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SearchContext } from "../../../Providers/SearchProvider";
import { FormStyled } from "./style";

export const Form = () => {
  const { getPokemon } = useContext(SearchContext);

  const schema = yup.object().shape({
    pokemon: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const searchSubmit = async (data) => {
    await getPokemon(data.pokemon);
  };

  return (
    <FormStyled onSubmit={handleSubmit(searchSubmit)}>
      <input
        type="text"
        placeholder="Pesquise por um pokemon"
        {...register("pokemon")}
      />
      {errors.pokemon && <span>{errors.pokemon.message}</span>}
      <button type="submit">Pesquisar</button>
    </FormStyled>
  );
};
