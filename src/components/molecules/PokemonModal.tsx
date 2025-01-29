import React from 'react';
import { View, Text, Modal, Image, Button, StyleSheet } from 'react-native';
import { PokemonModalProps } from '../../interfaces/PokemonModalProps.interface';
import styles from '../../styles/PokemonModal.styles';

const PokemonModal = ({ visible, pokemon, onClose }: PokemonModalProps) => {
  if (!pokemon) return null;

  return (
    <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>{pokemon.name}</Text>
        <Image
          source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
          style={styles.image}
        />
        <Text style={styles.detail}>Peso: {pokemon.weight}</Text>
        <Text style={styles.detail}>Altura: {pokemon.height}</Text>
        <Text style={styles.detail}>Tipos: {pokemon.types.map((type: any) => type.type.name).join(', ')}</Text>
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default PokemonModal;
