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
    subContainer: {
        flex: 0.85, 
        flexDirection: 'column-reverse',
        justifyContent: 'space-between'
    },
    boxLightRed: {
        ...box,
        backgroundColor: '#d73a49'
    },
    boxPurple: {
        ...box,
        backgroundColor: '#6f42c1'
    },
    boxWhite: {
        ...box,
        backgroundColor: 'white'
    },
});

export default styles;