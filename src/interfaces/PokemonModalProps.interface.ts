export interface PokemonModalProps {
    visible: boolean;
    pokemon: any | null;
    onClose: () => void;
}