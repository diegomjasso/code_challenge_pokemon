import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PokemonCardProps } from '../../interfaces/PokemonCardProps.interface';
import styles from '../../styles/PokemonCard.styles';

const PokemonCard = ({ name, imageUrl, onPress } : PokemonCardProps) => (
  <TouchableOpacity onPress={onPress} >
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={{ width: 50, height: 50 }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default PokemonCard;
