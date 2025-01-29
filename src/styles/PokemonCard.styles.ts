import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  name: {
    textTransform: 'capitalize',
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
});

export default styles;
