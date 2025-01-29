import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputProps } from '../../interfaces/SearchInputProps.interface';

const SearchInput = ({ value, onChange, style }: SearchInputProps) => (
  <TextInput
    style={style}
    placeholder="Search Pokémon"
    value={value}
    onChangeText={onChange}
  />
);

export default SearchInput;
