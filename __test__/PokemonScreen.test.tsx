import React from 'react';
import renderer from 'react-test-renderer';
import PokemonScreen from '../src/components/screens/PokemonScreen'; // Ajusta la ruta según tu estructura
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Crear un cliente de prueba para react-query
const queryClient = new QueryClient();

describe('PokemonScreen Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <PokemonScreen />
        </QueryClientProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
