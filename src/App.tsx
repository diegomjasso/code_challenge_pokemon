import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonScreen from './components/screens/PokemonScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PokemonScreen />
    </SafeAreaView>
  );
};

export default App;
