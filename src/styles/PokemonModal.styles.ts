import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 10,
        flexDirection: 'row',
        textTransform: 'capitalize',
        alignSelf: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        flexDirection: 'row',
        alignSelf: 'center'
    },
});

export default styles;
