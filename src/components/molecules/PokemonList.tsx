import React from 'react';
import { FlatList } from 'react-native';
import PokemonCard from '../atoms/PokemonCard';
import { PokemonListProps } from '../../interfaces/PokemonListProps.interface';

const PokemonList = ({ pokemonList, onSelect, style } : PokemonListProps) => (
  <FlatList
    style={style}
    data={pokemonList}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => (
      <PokemonCard
        name={item.name}
        imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png`}
        onPress={() => onSelect(item.url)}
      />
    )}
  />
);

export default PokemonList;
