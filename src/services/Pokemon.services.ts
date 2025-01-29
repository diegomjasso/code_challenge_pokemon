import axios from 'axios';

export const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonList = async (limit = 20): Promise<any[]> => {
  const response = await axios.get(`${urlAPI}?limit=${limit}`);
  return response.data.results;
};

export const fetchPokemonDetails = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};