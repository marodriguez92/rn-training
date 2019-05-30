import { StyleSheet } from 'react-native';

const box = {
    marginVertical: 40,
    marginLeft: 20,
    width: 100,
    height: 100,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0366d6',
        justifyContent: 'space-between'
    },
    boxLightRed: {
        ...box,
        flex: 0.5,
        backgroundColor: '#d73a49'
    },
    boxPurple: {
        ...box,
        flex: 0.3,
        backgroundColor: '#6f42c1'
    },
    boxWhite: {
        ...box,
        flex: 0.2,
        backgroundColor: 'white'
    },
});

export default styles;