import { PokemonItem } from "./PokemonItem.inteface";

export interface PokemonListProps {
    style?: object;
    pokemonList: PokemonItem[];
    onSelect: (url: string) => void;
}
