import { StyleSheet } from 'react-native';

const button = {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPrimary: {
        ...button,
        borderWidth: 0,
        backgroundColor: '#28a79b',
        color: 'white',
    },
    buttonSecondary: {
        ...button,
        borderWidth: 1,
    },
    disabledButton: {
        color: '#ccc',
        borderColor: '#ccc'
    }
});

export default styles;