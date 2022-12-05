import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 10000,
});

export const axiosAll = axios.create({
  baseURL: "",
  timeout: 10000,
});