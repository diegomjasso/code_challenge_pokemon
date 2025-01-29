import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Button, Image } from 'react-native';
import PokemonList from '../molecules/PokemonList';
import SearchInput from '../atoms/SearchInput';
import { fetchPokemonList, fetchPokemonDetails } from '../../services/Pokemon.services';
import styles from '../../styles/PokemonScreen.styles';
import PokemonModal from '../molecules/PokemonModal';

const PokemonScreen = () => {
	const [pokemonList, setPokemonList] = useState<any[]>([]);
	const [filteredList, setFilteredList] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedPokemon, setSelectedPokemon] = useState<any>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
  
	// Fetch Pokémon data
	useEffect(() => {
	  const getPokemonData = async () => {
		const list = await fetchPokemonList();
		setPokemonList(list);
		setFilteredList(list);
	  };
	  getPokemonData();
	}, []);
  
	// Handle search
	const handleSearch = (text: string) => {
	  setSearchTerm(text);
	  const filtered = pokemonList.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(text.toLowerCase())
	  );
	  setFilteredList(filtered);
	};
  
	// Handle selecting a Pokémon
	const handleSelectPokemon = async (url: string) => {
	  const details = await fetchPokemonDetails(url);
	  setSelectedPokemon(details);
	  setIsModalVisible(true);
	};
  
	// Reload Pokémon list
	const reloadPokemonList = async () => {
	  const list = await fetchPokemonList();
	  setPokemonList(list);
	  setFilteredList(list);
	};  

  return (
	<View style={styles.container}>
	  <SearchInput style={styles.header} value={searchTerm} onChange={handleSearch} />
	  <PokemonList style={styles.listContainer} pokemonList={filteredList} onSelect={handleSelectPokemon} />
	  <TouchableOpacity
		style={{
		  position: 'absolute',
		  right: 20,
		  bottom: 20,
		  backgroundColor: 'blue',
		  padding: 10,
		  borderRadius: 50,
		}}
		onPress={reloadPokemonList}
	  >
		<Text style={{ color: 'white' }}>Reload</Text>
	  </TouchableOpacity>

	  {/* Nuevo modal reutilizable */}
	  <PokemonModal visible={isModalVisible} pokemon={selectedPokemon} onClose={() => setIsModalVisible(false)} />
	</View>
  );
};

export default PokemonScreen;
